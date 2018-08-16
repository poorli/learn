var canvas = document.querySelector('#webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  attribute vec4 a_Color;
  // uniform mat4 u_ViewMatrix;
  // uniform mat4 u_ModelMatrix;
  uniform mat4 u_ModelViewMatrix;
  varying vec4 v_Color;
	void main() {
    // gl_Position = u_ViewMatrix * u_ModelMatrix * a_Position; // 设置坐标
  	gl_Position = u_ModelViewMatrix * a_Position; // 设置坐标
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

if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
  console.log('Failed to intialize shaders');
}

var n = initVertextBuffers(gl);

// var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
// var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
var u_ModelViewMatrix = gl.getUniformLocation(gl.program, 'u_ModelViewMatrix');

var viewMatrix = new Matrix4();

viewMatrix.setLookAt(0.20, 0.25, 0.25, 0, 0, 0, 0, 1, 0);
// viewMatrix.setLookAt(0, 0, 0, 0, 0, -1, 0, 1, 0);

var modelMatrix = new Matrix4();
modelMatrix.setRotate(-10, 0, 0, 1);
// modelMatrix.setRotate(120, 1, 0, 0);

var modelViewMatrix = viewMatrix.multiply(modelMatrix);

// gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements);
// gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
gl.uniformMatrix4fv(u_ModelViewMatrix, false, modelViewMatrix.elements);


if(n < 0) {
	console.log('Failed to get the storage location of a_Position');
}


gl.clearColor(0.0, 0.0, 0.0, 1.0);

gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, n);
gl.drawArrays(gl.TRIANGLES, 0, n);


function initVertextBuffers(gl) {
  var vertices = new Float32Array([
    // Vertex coordinates and color(RGBA)
     0.0,  0.5,  -0.4,  0.0,  1.0,  0.0, // The back green one
    -0.5, -0.5,  -0.4,  0.0,  1.0,  0.0,
     0.5, -0.5,  -0.4,  0.0,  1.0,  0.0, 
   
     0.5,  0.4,  -0.2,  0.0,  0.0,  1.0, // The middle yellow one
    -0.5,  0.4,  -0.2,  0.0,  0.0,  1.0,
     0.0, -0.6,  -0.2,  0.0,  0.0,  1.0, 

     0.0,  0.5,   0.0,  1.0,  0.0,  0.0,  // The front blue one 
    -0.5, -0.5,   0.0,  1.0,  0.0,  0.0,
     0.5, -0.5,   0.0,  1.0,  0.0,  0.0, 
  ]);

  // var vertices = new Float32Array([
  //   // Vertex coordinates and color(RGBA)
  //    0.0,  0.5,  -0.4,  0.4,  1.0,  0.4, // The back green one
  //   -0.5, -0.5,  -0.4,  0.4,  1.0,  0.4,
  //    0.5, -0.5,  -0.4,  1.0,  0.4,  0.4, 
   
  //    0.5,  0.4,  -0.2,  1.0,  0.4,  0.4, // The middle yellow one
  //   -0.5,  0.4,  -0.2,  1.0,  1.0,  0.4,
  //    0.0, -0.6,  -0.2,  1.0,  1.0,  0.4, 

  //    0.0,  0.5,   0.0,  0.4,  0.4,  1.0,  // The front blue one 
  //   -0.5, -0.5,   0.0,  0.4,  0.4,  1.0,
  //    0.5, -0.5,   0.0,  1.0,  0.4,  0.4, 
  // ]);
  var n = 9;

  // 创建缓冲区
  var vertextBuffer = gl.createBuffer();
  if(!vertextBuffer) {
    console.log('Failed to create the buffer object');
  }

  var FSIZE = vertices.BYTES_PER_ELEMENT;
  
  gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
  gl.enableVertexAttribArray(a_Position);

  // var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  // gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 2);
  // gl.enableVertexAttribArray(a_PointSize);

  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
  gl.enableVertexAttribArray(a_Color);

  return n;

}
