var canvas = document.querySelector('#webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  varying vec2 v_TextCoord;
	void main() {
  	gl_Position = a_Position; // 设置坐标
    v_TextCoord = a_TexCoord;
	}
`;

var FSHADER_SOURCE = `
  precision mediump float; // float 精度
  uniform sampler2D u_Sampler;
  varying vec2 v_TextCoord;
  void main() {
  	gl_FragColor = texture2D(u_Sampler, v_TextCoord);
  }
`;

if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
  console.log('Failed to intialize shaders');
}

// 配置顶点信息
var n = initVertextBuffers(gl);

if(n < 0) {
	console.log('Failed to get the storage location of a_Position');
}

gl.clearColor(0.0, 0.0, 0.0, 0.0);

// 配置纹理信息
if(!initTextures(gl, n));

function initVertextBuffers(gl) {
  // var vertices = new Float32Array([
  //   -0.5, 0.5, 0.0, 1.0,
  //   -0.5, -0.5, 0.0, 0.0,
  //   0.5, 0.5, 1.0, 1.0,
  //   0.5, -0.5, 1.0, 0.0]);

  var vertices = new Float32Array([
    -0.5, 0.5, -0.3, 1.7,
    -0.5, -0.5, -0.3, -0.2,
    0.5, 0.5, 1.7, 1.7,
    0.5, -0.5, 1.7, -0.2]);
  
  var n = 4;

  // 创建缓冲区
  var vertextBuffer = gl.createBuffer();
  if(!vertextBuffer) {
    console.log('Failed to create the buffer object');
  }

  var FSIZE = vertices.BYTES_PER_ELEMENT;
  
  gl.bindBuffer(gl.ARRAY_BUFFER, vertextBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
  gl.enableVertexAttribArray(a_Position);

  // 纹理坐标分配给 a_TexCoord 并开启它
  var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
  gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
  gl.enableVertexAttribArray(a_TexCoord);

  // var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  // gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 2);
  // gl.enableVertexAttribArray(a_PointSize);

  // var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  // gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
  // gl.enableVertexAttribArray(a_Color);

  return n;
}

function initTextures(gl, n) {
  var texture = gl.createTexture(); // 创建纹理对象

  // 获取 u_Sampler 的存储位置
  var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');

  var image = new Image();

  image.onload = function() {
    loadTexture(gl, n, texture, u_Sampler, image);
  }

  image.src = '../resources/sky.jpg';
  return true;
}

function loadTexture(gl, n, texture, u_Sampler, image) {
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // 对纹理对象进行 y 轴反转
  
  gl.activeTexture(gl.TEXTURE0); // 开启 0 号纹理对象
  
  gl.bindTexture(gl.TEXTURE_2D, texture); // 向 target 绑定纹理对象

  // 配置纹理参数
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  // 配置纹理图像
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  
  // 将 0 号纹理传递给着色器
  gl.uniform1i(u_Sampler, 0);

  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
}
