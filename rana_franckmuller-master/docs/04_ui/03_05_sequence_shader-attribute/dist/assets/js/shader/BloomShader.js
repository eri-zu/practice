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

THREE.BloomShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"tone":   { value: 0.7 },
		"strength":   { value: 0.3 },
		"texBase":   { value: "" },

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
		// "uniform sampler2D texBlur;"
		"uniform float tone;",
		"uniform float strength;",
		"uniform sampler2D texBase;",

		"varying vec2 vUv;",

		"void main() {",

			"gl_FragColor = texture2D(texBase, vUv) * tone + texture2D(tDiffuse, vUv) * strength;",
			// "gl_FragColor = texture2D(tDiffuse, vUv);",
			// "gl_FragColor = texture2D(texBase, vUv);",

		"}"

	].join( "\n" )

};
