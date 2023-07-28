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

THREE.BlurShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"resolution":   { value: new THREE.Vector2(window.innerWidth / 10, window.innerHeight / 10) },
		"direction":   { value: new THREE.Vector2(1.0, 0.0) },

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
		"uniform vec2 resolution;",
		"uniform vec2 direction;",

		"varying vec2 vUv;",

		// "#pragma glslify: blur13 = require('glsl-fast-gaussian-blur/13')",
		// "#pragma glslify: blur9 = require('glsl-fast-gaussian-blur/9')",
		// "#pragma glslify: blur5 = require('glsl-fast-gaussian-blur/5')",

		"vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {",
		  "vec4 color = vec4(0.0);",
		  "vec2 off1 = vec2(1.3846153846) * direction;",
		  "vec2 off2 = vec2(3.2307692308) * direction;",
		  "color += texture2D(image, uv) * 0.2270270270;",
		  "color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;",
		  "color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;",
		  "color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;",
		  "color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;",
		  "return color;",
		"}",

		"void main() {",

			"gl_FragColor = blur9(tDiffuse, vUv, resolution, direction);",

		"}"

	].join( "\n" )

};
