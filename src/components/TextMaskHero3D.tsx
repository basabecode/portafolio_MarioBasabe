import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useWebGL } from '../hooks/useWebGL'
import { textMaskShaders } from '../shaders/textMaskShaders'

interface TextMaskHero3DProps {
  className?: string
}

const TextMaskHero3D: React.FC<TextMaskHero3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene?: THREE.Scene
    camera?: THREE.PerspectiveCamera
    renderer?: THREE.WebGLRenderer
    mesh?: THREE.Mesh
    animationId?: number
  }>({})

  const { hasWebGL, isLoading } = useWebGL()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isLoading) return

    // Set ready state immediately after WebGL check
    setIsReady(true)

    if (!hasWebGL || !containerRef.current) {
      return
    }

    const container = containerRef.current
    const { clientWidth, clientHeight } = container

    try {
      // Basic 3D scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        clientWidth / clientHeight,
        0.1,
        1000
      )
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })

      renderer.setSize(clientWidth, clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x1a1a2e, 1) // Dark blue background

      // Style the canvas to ensure it's visible
      renderer.domElement.style.position = 'absolute'
      renderer.domElement.style.top = '0'
      renderer.domElement.style.left = '0'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'

      // Advanced geometry for text masking effect
      const geometry = new THREE.PlaneGeometry(4, 4, 100, 100)

      const material = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision mediump float;
          uniform float uTime;
          varying vec2 vUv;

          // Noise function
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

            // Create flowing waves
            float wave1 = sin(uv.x * 8.0 + uTime * 2.0) * 0.5 + 0.5;
            float wave2 = sin(uv.y * 6.0 + uTime * 1.5) * 0.5 + 0.5;
            float wave3 = sin((uv.x + uv.y) * 10.0 + uTime * 3.0) * 0.3 + 0.5;

            // Add noise for texture
            float n = noise(uv * 5.0 + uTime * 0.5) * 0.2;

            // Color palette
            vec3 color1 = vec3(0.1, 0.1, 0.3); // Dark blue
            vec3 color2 = vec3(0.4, 0.2, 0.8); // Purple
            vec3 color3 = vec3(0.2, 0.6, 0.9); // Light blue
            vec3 color4 = vec3(0.8, 0.4, 0.9); // Pink

            // Mix colors based on waves
            vec3 finalColor = mix(color1, color2, wave1);
            finalColor = mix(finalColor, color3, wave2 * 0.7);
            finalColor = mix(finalColor, color4, wave3 * 0.5);

            // Add noise variation
            finalColor += n;

            // Create alpha for transparency effects
            float alpha = 0.8 + wave1 * 0.2;

            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        uniforms: {
          uTime: { value: 0 },
        },
        transparent: true,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Position camera to see the plane
      camera.position.z = 3
      camera.lookAt(0, 0, 0)

      container.appendChild(renderer.domElement) // Enhanced animation loop
      const animate = () => {
        const time = performance.now() * 0.001

        // Update time uniform
        material.uniforms.uTime.value = time

        // Add subtle rotation and movement
        mesh.rotation.z = Math.sin(time * 0.2) * 0.05
        mesh.position.x = Math.sin(time * 0.1) * 0.1
        mesh.position.y = Math.cos(time * 0.15) * 0.1

        // Render the scene
        renderer.render(scene, camera)
        sceneRef.current.animationId = requestAnimationFrame(animate)
      }

      animate()

      // Store references
      sceneRef.current = { scene, camera, renderer, mesh } // Handle resize
      const handleResize = () => {
        if (!containerRef.current || !camera || !renderer) return

        const { clientWidth, clientHeight } = containerRef.current
        camera.aspect = clientWidth / clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(clientWidth, clientHeight)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)

        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId)
        }

        if (sceneRef.current.renderer && container) {
          try {
            container.removeChild(sceneRef.current.renderer.domElement)
          } catch (e) {
            // Element might already be removed
          }
          sceneRef.current.renderer.dispose()
        }

        if (sceneRef.current.scene) {
          sceneRef.current.scene.clear()
        }
      }
    } catch (error) {
      // Scene initialization failed
    }
  }, [hasWebGL, isLoading])

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 ${className}`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4 mx-auto"></div>
          <p className="text-white/70 text-lg">Cargando experiencia 3D...</p>
        </div>
      </div>
    )
  }

  if (hasWebGL === false) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 ${className}`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/img_gris_gafas.webp"
            alt="Mario Basabe"
            className="w-96 h-96 object-cover opacity-30 blur-sm"
            onError={e => {
              // Hide image if it fails to load
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Animated Text */}
        <div className="absolute inset-0 flex items-center justify-between px-8">
          <div className="text-left animate-pulse">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              MARIO
            </h1>
          </div>
          <div className="text-right animate-pulse delay-300">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              BASABE
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <p className="text-white/90 text-xl font-light tracking-widest">
            Frontend Developer
          </p>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Large Name Display - Background Layer */}
      <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/10 tracking-tight select-none leading-none">
            MARIO
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/10 tracking-tight select-none leading-none -mt-4">
            BASABE
          </h1>
        </div>
      </div>

      {/* Tech indicators */}
      <div className="absolute top-8 left-8 z-10">
        <div className="backdrop-blur-sm bg-black/20 px-3 py-2 rounded-lg border border-white/10">
          <p className="text-white/70 text-sm font-mono">WebGL • Three.js</p>
        </div>
      </div>
    </div>
  )
}

export default TextMaskHero3D
