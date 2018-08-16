var canvas = document.querySelector('#webgl');
// console.log(gl);
var gl = canvas.getContext('webgl');
// var gl = getWebGLContext(canvas);

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  uniform float u_CosB, u_SinB;
  	void main() {
      gl_Position.x = a_Position.x * u_CosB - a_Position.x * u_SinB; // 设置坐标
      gl_Position.y = a_Position.y * u_SinB + a_Position.y * u_CosB; // 设置坐标
      gl_Position.z = a_Position.z; // 设置坐标
    	gl_Position.w = 1.0; // 设置坐标
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

// var Tx = 0.5;
// var Ty = 0.5
// var Tz = 0.0;
// var ANGLE = 90.0;
var ANGLE = 180.0;
// var ANGLE = 0;
// var ANGLE = 60.0;
var radian = Math.PI * ANGLE / 180.0;
var consB = Math.cos(radian);
var sinB = Math.sin(radian);

var u_CosB = gl.getUniformLocation(gl.program, 'u_CosB');
var u_SinB = gl.getUniformLocation(gl.program, 'u_SinB');
// var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
// if (!u_Translation) {
//   console.log('Failed to get the storage location of u_Translation');
//   // return;
// }
// gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);
gl.uniform1f(u_CosB, consB);
gl.uniform1f(u_SinB, sinB);

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