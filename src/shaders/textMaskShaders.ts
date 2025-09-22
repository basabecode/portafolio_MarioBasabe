// Advanced shader materials for the text masking effect
export const textMaskShaders = {
  vertex: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragment: `
    uniform sampler2D tImage;
    uniform float uTime;
    uniform vec2 uMarioPos;
    uniform vec2 uBasabePos;
    uniform float uOpacity;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    // Noise function for texture
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    void main() {
      vec2 uv = vUv;

      // Sample the base image
      vec4 image = texture2D(tImage, uv);

      // Calculate distances to text positions
      float distToMario = distance(uv, uMarioPos);
      float distToBasabe = distance(uv, uBasabePos);

      // Create dynamic masks with animation
      float marioRadius = 0.15 + sin(uTime * 3.0) * 0.02;
      float basabeRadius = 0.18 + cos(uTime * 2.5) * 0.02;

      // Smooth step masks with soft edges
      float marioMask = 1.0 - smoothstep(marioRadius - 0.05, marioRadius + 0.05, distToMario);
      float basabeMask = 1.0 - smoothstep(basabeRadius - 0.05, basabeRadius + 0.05, distToBasabe);

      // Combine masks
      float combinedMask = max(marioMask, basabeMask);

      // Add noise for texture
      float noiseValue = noise(uv * 10.0 + uTime * 0.5) * 0.1;
      combinedMask += noiseValue;

      // Create gradient background
      vec3 gradient = mix(uColor1, uColor2, uv.y);

      // Apply masking effect
      vec3 finalColor = mix(gradient, image.rgb, combinedMask);

      // Add subtle glow effect around masks
      float glow = (marioMask + basabeMask) * 0.3;
      finalColor += glow * vec3(0.4, 0.6, 1.0);

      gl_FragColor = vec4(finalColor, uOpacity);
    }
  `,

  // Text shader for the floating text elements
  textVertex: `
    varying vec2 vUv;
    varying float vTime;
    uniform float uTime;

    void main() {
      vUv = uv;
      vTime = uTime;

      vec3 pos = position;

      // Add subtle wave animation to text
      pos.z += sin(pos.x * 2.0 + uTime * 2.0) * 0.1;
      pos.y += cos(pos.x * 1.5 + uTime * 1.5) * 0.05;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,

  textFragment: `
    uniform sampler2D tText;
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uTextColor;

    varying vec2 vUv;
    varying float vTime;

    void main() {
      vec4 text = texture2D(tText, vUv);

      // Add subtle glow effect
      float glow = sin(vTime * 3.0) * 0.2 + 0.8;
      vec3 finalColor = uTextColor * glow;

      // Apply text alpha
      float alpha = text.a * uOpacity;

      gl_FragColor = vec4(finalColor, alpha);
    }
  `,
}

// Utility functions for the shader
export const shaderUtils = {
  createTextTexture: (
    text: string,
    fontSize: number = 128,
    color: string = '#ffffff'
  ) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = 1024
    canvas.height = 512

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // Set up text style
    context.fillStyle = color
    context.font = `bold ${fontSize}px "Arial", sans-serif`
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    // Add text shadow for better definition
    context.shadowColor = 'rgba(0, 0, 0, 0.5)'
    context.shadowBlur = 4
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2

    // Draw text
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    return canvas
  },

  createGradientTexture: (width: number = 512, height: number = 512) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = width
    canvas.height = height

    // Create gradient
    const gradient = context.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, '#1a1a2e')
    gradient.addColorStop(0.5, '#16213e')
    gradient.addColorStop(1, '#0f0f23')

    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    return canvas
  },
}
