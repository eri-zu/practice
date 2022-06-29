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

THREE.BrightShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"minBright":   { value: 0.2 },

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
		"uniform float minBright;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 bright = max(vec4(0.0), (texture2D(tDiffuse, vUv) - minBright));",
			"gl_FragColor = bright;",

		"}"

	].join( "\n" )

};
