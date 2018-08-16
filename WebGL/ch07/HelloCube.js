var VSHADER_SOURCE =`
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  uniform mat4 u_MvpMatrix;
  varying vec4 v_Color;
  void main() {
    gl_Position = u_MvpMatrix * a_Position; // 设置坐标
    v_Color = a_Color;
  }
`;

var FSHADER_SOURCE = `
  precision mediump float; // float 精度
  varying vec4 v_Color;
  void main() {
    gl_FragColor = v_Color;
  }
`;

// Get the rendering context for WebGL
var canvas = document.querySelector('#webgl');
var gl = canvas.getContext('webgl');

// Set the vertex coordinates and color
if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
  console.log('Failed to intialize shaders');
}

// Set the vertex coordinates and color
var n = initVertextBuffers(gl);
if(n < 0) {
  console.log('Failed to get the storage location of a_Position');
}

var modelMatrix = new Matrix4();
var viewMatrix = new Matrix4();
var projMatrix = new Matrix4();

var u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
var mvpMatrix = new Matrix4();

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.enable(gl.DEPTH_TEST);

draw(gl, n, u_MvpMatrix, mvpMatrix);


function draw(gl, n, u_MvpMatrix, mvpMatrix) {
  // Pass the model view projection matrix to u_MvpMatrix
  modelMatrix.setTranslate(0, 0, 0);
  viewMatrix.setLookAt(3, 3, 7, 0, 0, 0, 0, 1, 0);
  projMatrix.setPerspective(30, canvas.width / canvas.height, 1, 100);
  mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);

  // Pass the model view projection matrix to u_MvpMatrix
  gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

  // Clear color and depth buffer
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Draw the cube
  gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0)

  // modelMatrix.setTranslate(0.75, 0, 0);
  // mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);
  // gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);
  // gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertextBuffers(gl) {
  // Create a cube
  //    v6----- v5
  //   /|      /|
  //  v1------v0|
  //  | |     | |
  //  | |v7---|-|v4
  //  |/      |/
  //  v2------v3
  var verticesColors = new Float32Array([
    // Vertex coordinates and color
     1.0,  1.0,  1.0,     1.0,  1.0,  1.0,  // v0 White
    -1.0,  1.0,  1.0,     1.0,  0.0,  1.0,  // v1 Magenta
    -1.0, -1.0,  1.0,     1.0,  0.0,  0.0,  // v2 Red
     1.0, -1.0,  1.0,     1.0,  1.0,  0.0,  // v3 Yellow
     1.0, -1.0, -1.0,     0.0,  1.0,  0.0,  // v4 Green
     1.0,  1.0, -1.0,     0.0,  1.0,  1.0,  // v5 Cyan
    -1.0,  1.0, -1.0,     0.0,  0.0,  1.0,  // v6 Blue
    -1.0, -1.0, -1.0,     0.0,  0.0,  0.0   // v7 Black
  ]);

   // Indices of the vertices
   var indices = new Uint8Array([
     0, 1, 2,   0, 2, 3,    // front
     0, 3, 4,   0, 4, 5,    // right
     0, 5, 6,   0, 6, 1,    // up
     1, 6, 7,   1, 7, 2,    // left
     7, 4, 3,   7, 3, 2,    // down
     4, 7, 6,   4, 6, 5     // back
  ]);

  // var n = 9;

  // 创建缓冲区
  var vertextBuffer = gl.createBuffer();
  var indexBuffer = gl.createBuffer();

  if(!vertextBuffer || !indexBuffer) {
    console.log('Failed to create the buffer object');
  }

  // Write the vertex coordinates and color to the buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);

  var FSIZE = verticesColors.BYTES_PER_ELEMENT;

  // Assign the buffer object to a_Position and enable the assignment
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if(a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
  gl.enableVertexAttribArray(a_Position);

  // Write the indices to the buffer object
  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  if(a_Color < 0) {
    console.log('Failed to get the storage location of a_Color');
    return -1;
  }
  gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
  gl.enableVertexAttribArray(a_Color);

  // Write the indices to the buffer object
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

  return indices.length;
}
