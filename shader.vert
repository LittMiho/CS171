#version 330 core

layout (location = 0) in vec3 aPosition;
layout (location = 1) in vec3 aNormal;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;
uniform mat3 normalMatrix;

out vec3 fragmentPosition;
out vec3 fragmentNormal;

void main() {
  vec4 worldPosition = model * vec4(aPosition, 1.0);
  fragmentPosition = worldPosition.xyz;
  fragmentNormal = normalize(normalMatrix * aNormal);
  gl_Position = projection * view * worldPosition;
}
