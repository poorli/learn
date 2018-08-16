var canvas = document.querySelector('#webgl');
var gl = canvas.getContext('webgl');

var VSHADER_SOURCE =`
	attribute vec4 a_Position;
  	void main() {
    	gl_Position = a_Position; // 设置坐标
    	gl_PointSize = 10.0; // 设置尺寸
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

// gl.getAttribLocation(WebGLProgram_program, string_name)
var a_Position = gl.getAttribLocation(gl.program, 'a_Position');

if(a_Position < 0) {
	console.log('Failed to get the storage location of a_Position');
}

// gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
gl.vertexAttrib3f(a_Position, 0.5, 0.5, 0.0);

gl.clearColor(0.0, 0.0, 0.0, 1.0);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(gl.POINTS, 0, 1);