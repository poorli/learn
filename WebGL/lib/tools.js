function loadShader(gl, type, source) {
	var shader = gl.createShader(type);

	// Send the source to the shader object
	gl.shaderSource(shader, source);

	// Compile the shader program
	gl.compileShader(shader);

	// See if it compiled successfully
	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert('An error occurred compoling the shders: ' + gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

function createProgram(gl, vsSource, fsSource) {
	// Check the result of linking
	var vertextShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

	var shaderProgram = gl.createProgram();

	// Attach the shader objects
	gl.attachShader(shaderProgram, vertextShader);
	gl.attachShader(shaderProgram, fragmentShader);

	// Link the program object
	gl.linkProgram(shaderProgram);

	// Check the result of linking
	if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
		return null;
	}
	return shaderProgram;
}

function initShaders(gl, vshader, fshader) {
  var program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.log('Failed to create program');
    return false;
  }

  gl.useProgram(program);
  gl.program = program;

  return true;
}