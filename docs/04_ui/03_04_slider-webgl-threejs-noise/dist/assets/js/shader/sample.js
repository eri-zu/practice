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

THREE.SampleShader = {

	uniforms: {

		"texture": { value: null },
		"texture2":   { value: null },
		"disp":    { value: null },
		"dispFactor":    { value: null },
		"threshold":    { value: .1 },
		"resolution":    { value: new THREE.Vector2() },
		"imageResolution":    { value: new THREE.Vector2() },

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

		"varying vec2 vUv;",
		"uniform sampler2D texture;",
		"uniform sampler2D texture2;",
		"uniform sampler2D disp;",
		"uniform float dispFactor;",
		"uniform float threshold;",
		"uniform vec2 resolution;",
		"uniform vec2 imageResolution;",

		"void main() {",

			"vec2 ratio = vec2(",
			"min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),",
			"min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)",
			");",

			"vec2 uv = vec2(",
			"vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,",
			"vUv.y * ratio.y + (1.0 - ratio.y) * 0.5",
			");",

			"vec4 texel1 = texture2D(texture, vUv);",
			"vec4 texel2 = texture2D(texture2, vUv);",

			"vec4 transitionTexel = texture2D(disp, vUv);",

			// 2値化(threshold)
			"#define R_LUMINANCE 0.298912",
			"#define G_LUMINANCE 0.586611",
			"#define B_LUMINANCE 0.114478",

			"float v = transitionTexel.x * R_LUMINANCE + transitionTexel.y * G_LUMINANCE + transitionTexel.z * B_LUMINANCE;",
			"// if (v >= 0.53333) {",
			"const float kaityo = 1.0;",
			"for(float i = 0.0; i < kaityo; i+=1.0){",
			  "if (v >= 1.0 - i / kaityo) {",
			    "v = i / kaityo;",
			    "break;",
			  "}",
			"}",
			"transitionTexel = vec4(vec3(v, v, v), 1.0);",

			"float r = dispFactor * (1.0 + threshold * 2.0) - threshold;",
			"float mixf = clamp((transitionTexel.r - r) * (1.0 / threshold), 0.0, 1.0);", // 黒から白に変わっていく or 白から黒に変わっていく

			"gl_FragColor = mix( texel1, texel2, 1.0 - mixf );",
			// "gl_FragColor = transitionTexel;",

	  "}",

	].join( "\n" )

};
