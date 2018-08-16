var canvas = document.querySelector('#webgl');
// console.log(gl);
var gl = canvas.getContext('webgl');
// var gl = getWebGLContext(canvas);

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  uniform vec4 u_Translation;
  	void main() {
    	gl_Position = a_Position + u_Translation; // 设置坐标
  	}
`;

var FSHADER_SOURCE = `
  	void main() {
    	gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  	}
`;

if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
  	console.log('Failed to intialize shaders');
}

var n = initVertextBuffers(gl);

if(n < 0) {
	console.log('Failed to get the storage location of a_Position');
}

var Tx = 0.5;
var Ty = 0.5
var Tz = 0.0;

var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
if (!u_Translation) {
  console.log('Failed to get the storage location of u_Translation');
  // return;
}
gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);

gl.clearColor(0.0, 0.0, 0.0, 1.0);

gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, n);
gl.drawArrays(gl.TRIANGLES, 0, n);
// gl.drawArrays(gl.LINES, 0, n);
// gl.drawArrays(gl.LINE_STRIP, 0, n);
// gl.drawArrays(gl.LINE_LOOP, 0, n);

function initVertextBuffers(gl) {
  var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
  var n = 3;

  // 创建缓冲区
  var vertextBuffer = gl.createBuffer();
  if(!vertextBuffer) {
    console.log('Failed to create the buffer object');
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  gl.enableVertexAttribArray(a_Position);

  return n;

}