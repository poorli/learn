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

// 设置 canvas 背景色
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// 获取 u_ModelMatrix 变量的存储位置
var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');

var ANGLE_STEP = 45.0;
var currentAngle = 0.0;

// 模型矩阵
var modelMatrix = new Matrix4();
var g_last = Date.now();

var tick = function() {
  currentAngle = animate(currentAngle);
  draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix);
  requestAnimationFrame(tick);
}

tick();

function animate(angle) {
  var now = Date.now();
  console.log(new Date(now));
  var elapsed = now - g_last;
  g_last = now;
  var newAngle = angle + (ANGLE_STEP * elapsed) / 1000.0;
  return newAngle %= 360;
}

function draw(gl, n, currentAngle, modelMatrix, u_ModelMatrix) {
  modelMatrix.setRotate(currentAngle, 0, 0, 1);
  modelMatrix.translate(0.35, 0, 0);
  gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, n);
}

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