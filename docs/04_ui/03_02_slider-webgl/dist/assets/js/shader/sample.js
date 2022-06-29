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
		"effectFactor":    { value: null },
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
		"uniform float effectFactor;",
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

			// "vec2 uv = vUv;",

      "vec4 disp = texture2D(disp, uv);",

      // 2値化(threshold)
      "#define R_LUMINANCE 0.298912",
      "#define G_LUMINANCE 0.586611",
      "#define B_LUMINANCE 0.114478",

      "float v = disp.x * R_LUMINANCE + disp.y * G_LUMINANCE + disp.z * B_LUMINANCE;",
      "// if (v >= 0.53333) {",
      "if (v >= 0.98333) {",
        "v = 1.0;",
      "} else if (v >= 0.76333){",
        "v = 0.8;",
      "} else if (v >= 0.54333){",
        "v = 0.6;",
      "} else if (v >= 0.32333){",
        "v = 0.4;",
      "} else if (v >= 0.10333){",
        "v = 0.2;",
      "} else {",
      	"v = 0.0;",
      "}",
      "disp = vec4(vec3(v, v, v), 1.0);",

      "vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);",
      "vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);",

      "vec4 _texture = texture2D(texture, distortedPosition);",
      "vec4 _texture2 = texture2D(texture2, distortedPosition2);",

      "vec4 finalTexture = mix(_texture, _texture2, dispFactor);",

      // "gl_FragColor = finalTexture;",
      // "gl_FragColor = finalTexture;",
      "gl_FragColor = disp;",

		"}",

	].join( "\n" )

};
