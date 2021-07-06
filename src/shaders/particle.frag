// @author brunoimbrizi / http://brunoimbrizi.com

precision highp float;

uniform sampler2D uTexture;

varying vec2 vPUv;
varying vec2 vUv;

void main() {
	vec4 color = vec4(1.0);
	vec2 uv = vUv;
	vec2 puv = vPUv;

	// pixel color
	vec4 colA = texture2D(uTexture, puv);

		// greyscale
	float cyan = colA.r * 0.074 + colA.g * 0.66 + colA.b * 0.943;
	vec4 colB = vec4(cyan, cyan, cyan, 1.0);

	// circle
	float border = 0.3;
	float radius = 0.5;
	float dist = radius - distance(uv, vec2(0.5));
	float t = smoothstep(0.0, border, dist);

	// final color
	color = colB*vec4(0.074, 0.66, 0.843, 1.0);
	color.a = t;

	gl_FragColor = color;
}