var canvas = document.querySelector('#webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  attribute float a_PointSize;
  attribute vec4 a_Color;
  varying vec4 v_Color;
	void main() {
  	gl_Position = a_Position; // 设置坐标
  	gl_PointSize = a_PointSize; // 设置尺寸
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

if(n < 0) {
	console.log('Failed to get the storage location of a_Position');
}


gl.clearColor(0.0, 0.0, 0.0, 1.0);

gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, n);
gl.drawArrays(gl.TRIANGLES, 0, n);


function initVertextBuffers(gl) {
  var vertices = new Float32Array([
    0.0, 0.5, 10.0, 1.0, 0.0, 0.0,
    -0.5, -0.5, 20.0, 0.0, 1.0, 0.0,
    0.5, -0.5, 30.0, 0.0, 0.0, 1.0]);
  var n = 3;

  // 创建缓冲区
  var vertextBuffer = gl.createBuffer();
  if(!vertextBuffer) {
    console.log('Failed to create the buffer object');
  }

  var FSIZE = vertices.BYTES_PER_ELEMENT;
  
  gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 6, 0);
  gl.enableVertexAttribArray(a_Position);

  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 2);
  gl.enableVertexAttribArray(a_PointSize);

  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
  gl.enableVertexAttribArray(a_Color);

  return n;

}