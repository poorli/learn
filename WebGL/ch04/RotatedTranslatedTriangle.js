var canvas = document.querySelector('#webgl');
// console.log(gl);
var gl = canvas.getContext('webgl');
// var gl = getWebGLContext(canvas);

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  uniform float u_CosB, u_SinB;
  uniform mat4 u_ModelMatrix;
  	void main() {
      gl_Position = u_ModelMatrix * a_Position; // 设置坐标
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
// var ANGLE = 30.0;
// var ANGLE = 60.0;
var radian = Math.PI * ANGLE / 180.0;
var cosB = Math.cos(radian);
var sinB = Math.sin(radian);

// 按列主序
// 旋转
// var xformMatrix = new Float32Array([
//   cosB, sinB, 0.0, 0.0,
//   -sinB, cosB, 0.0, 0.0,
//   0.0, 0.0, 1.0, 0.0,
//   0.0, 0.0, 0.0, 1.0
//   ])

// 平移
// var xformMatrix = new Float32Array([
//   1.0, 0.0, 0.0, 0.0,
//   0.0, 1.0, 0.0, 0.0,
//   0.0, 0.0, 1.0, 0.0,
//   0.5, 0.5, 0.0, 1.0
//   ])

var Sx = 2.0;
var Sy = 2.0;
var Sz = 0;
// 缩放
// var xformMatrix = new Float32Array([
//   Sx, 0.0, 0.0, 0.0,
//   0.0, Sy, 0.0, 0.0,
//   0.0, 0.0, Sz, 0.0,
//   0.0, 0.0, 0.0, 1.0
//   ])


var xformMatrix = new Matrix4();

xformMatrix.setRotate(ANGLE, 0, 0, 1);

var Tx = .5;
xformMatrix.translate(Tx, 0, 0);

var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');

gl.uniformMatrix4fv(u_ModelMatrix, false, xformMatrix.elements);
// var u_CosB = gl.getUniformLocation(gl.program, 'u_CosB');
// var u_SinB = gl.getUniformLocation(gl.program, 'u_SinB');
// var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
// if (!u_Translation) {
//   console.log('Failed to get the storage location of u_Translation');
//   // return;
// }
// gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);
// gl.uniform1f(u_CosB, cosB);
// gl.uniform1f(u_SinB, sinB);

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