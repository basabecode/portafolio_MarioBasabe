precision mediump float;

uniform float uTime;
uniform sampler2D uImageTexture;
uniform vec2 uTextPosition;
uniform vec2 uImagePosition;
uniform float uTextWidth;
uniform float uMaskStrength;

varying vec2 vUv;
varying vec3 vPosition;

// Smooth step function for text masking
float smoothTextMask(vec2 uv, vec2 textPos, float textWidth) {
  float dist = distance(uv.x, textPos.x);
  return smoothstep(0.0, textWidth, dist);
}

void main() {
  vec2 uv = vUv;

  // Sample the image texture
  vec4 imageColor = texture2D(uImageTexture, uv);

  // Calculate text mask based on position
  float textMask = smoothTextMask(uv, uTextPosition, uTextWidth);

  // Apply transparency effect when text overlaps image
  float alpha = mix(0.0, 1.0, textMask * uMaskStrength);

  // Final color with masking effect
  vec4 finalColor = vec4(imageColor.rgb, alpha * imageColor.a);

  gl_FragColor = finalColor;
}
