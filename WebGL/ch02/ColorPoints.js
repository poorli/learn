var canvas = document.querySelector('#webgl');
// console.log(gl);
var gl = canvas.getContext('webgl');
// var gl = getWebGLContext(canvas);

var VSHADER_SOURCE =`
  attribute vec4 a_Position;
    void main() {
      gl_Position = a_Position; // 设置坐标
      gl_PointSize = 10.0; // 设置尺寸
    }
`;

var FSHADER_SOURCE = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }
`;

if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders');
}

// gl.getAttribLocation(WebGLProgram_program, string_name)
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

if(a_Position < 0) {
  console.log('Failed to get the storage location of a_Position');
}

canvas.onmousedown = function(ev) {
  click(ev, gl, canvas, a_Position, u_FragColor);
}
// gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
// gl.vertexAttrib3f(a_Position, 0.5, 0.5, 0.0);

gl.clearColor(0.0, 0.0, 0.0, 1.0);

gl.clear(gl.COLOR_BUFFER_BIT);

// gl.drawArrays(gl.POINTS, 0, 1);

var g_points = [];
var color = [];

function click(ev, gl, canvas, a_Position) {
  var x = ev.clientX;
  var y = ev.clientY;
  var rect = ev.target.getBoundingClientRect();

  // 注意坐标的转换
  x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2);
  y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);

if(x >= 0.0 && y >= 0.0) {
  color = [1.0, 0.0, 0.0, 1.0]; // 红色
} else if(x < 0.0 && y < 0.0){
  color = [0.0, 1.0, 0.0, 1.0]; // 绿色
} else {
  color = [1.0, 1.0, 1.0, 1.0]; // 白色
}

  g_points.push({
    x: x,
    y: y,
    color: color
  });

  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_points.length;
  for(var i = 0; i < len; i ++) {
    // 将点的位置传递到变量中 a_Position
    gl.vertexAttrib3f(a_Position, g_points[i].x, g_points[i].y, 0.0);

    // 点的颜色
    gl.uniform4f(u_FragColor, g_points[i].color[0], g_points[i].color[1], g_points[i].color[2], g_points[i].color[3]);
    
    // 绘制点
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}