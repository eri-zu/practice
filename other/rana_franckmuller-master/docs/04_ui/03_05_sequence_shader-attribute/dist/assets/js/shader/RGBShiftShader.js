/**
 * @author felixturner / http://airtight.cc/
 *
 * RGB Shift Shader
 * Shifts red and blue channels from center in opposite directions
 * Ported from http://kriss.cx/tom/2009/05/rgb-shift/
 * by Tom Butterworth / http://kriss.cx/tom/
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

THREE.RGBShiftShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"amount":   { value: 0.005 },
		"angle":    { value: 0.0 },
		"brightness":    { value: 1.95 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		// "precision lowp float;",

		"uniform sampler2D tDiffuse;",
		"uniform float amount;",
		"uniform float angle;",
		"uniform float brightness;",

		"varying vec2 vUv;",

		"void main() {",

			"vec2 offset = amount * vec2( cos(angle), sin(angle));",
			"vec4 color = texture2D(tDiffuse, vUv) * brightness;",
			"vec4 cr = texture2D(tDiffuse, vUv + offset) * brightness;",
			"vec4 cg = texture2D(tDiffuse, vUv) * brightness;",
			"vec4 cb = texture2D(tDiffuse, vUv - offset) * brightness;",
			"gl_FragColor = vec4(cr.r, cg.g, cb.b, color.a);",
			// "gl_FragColor = vec4(cr.r, cg.g, cb.b, color.a) + (texture2D(tDiffuse, vUv.xx) + texture2D(tDiffuse, vUv.yy)) * 0.7;",

		"}"

	].join( "\n" )

};
