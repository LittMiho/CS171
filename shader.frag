#version 330 core

in vec3 fragmentPosition;
in vec3 fragmentNormal;

uniform vec3 viewPosition;
uniform vec3 lightPosition;
uniform vec3 objectColor;

out vec4 color;

void main() {
  vec3 normal = normalize(fragmentNormal);
  vec3 lightDirection = normalize(lightPosition - fragmentPosition);
  vec3 viewDirection = normalize(viewPosition - fragmentPosition);
  vec3 reflectedDirection = reflect(-lightDirection, normal);

  float ambientStrength = 0.12;
  vec3 ambient = ambientStrength * objectColor;
  float diffuseStrength = max(dot(normal, lightDirection), 0.0);
  vec3 diffuse = diffuseStrength * objectColor;
  float specularStrength = 0.35;
  float specularPower = pow(max(dot(viewDirection, reflectedDirection), 0.0), 32.0);
  vec3 specular = specularStrength * specularPower * vec3(1.0);
  color = vec4(ambient + diffuse + specular, 1.0);
}
