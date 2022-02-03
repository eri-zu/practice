uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

void main() {

  float a = 1.0;
  int b = 2;
  float c = a + float(b);
  vec2 foo = vec2(0.0);
  foo.x = 1.0;
  foo.y = 2.0;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}