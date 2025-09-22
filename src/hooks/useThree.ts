import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'

export const useThree = (containerRef: React.RefObject<HTMLElement>) => {
  const [isReady, setIsReady] = useState(false)
  const sceneRef = useRef<{
    scene?: THREE.Scene
    camera?: THREE.PerspectiveCamera
    renderer?: THREE.WebGLRenderer
    animationId?: number
    cleanup?: () => void
  }>({})

  const initializeScene = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const { clientWidth, clientHeight } = container

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      clientWidth / clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(clientWidth, clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    container.appendChild(renderer.domElement)

    // Store references
    sceneRef.current = { scene, camera, renderer }
    setIsReady(true)

    return { scene, camera, renderer }
  }

  const dispose = () => {
    const { scene, renderer, animationId } = sceneRef.current

    if (animationId) {
      cancelAnimationFrame(animationId)
    }

    if (scene) {
      scene.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose())
          } else {
            child.material.dispose()
          }
        }
      })
      scene.clear()
    }

    if (renderer) {
      renderer.dispose()
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }

    sceneRef.current = {}
    setIsReady(false)
  }

  const startAnimation = (animateCallback: (time: number) => void) => {
    const animate = (time: number) => {
      animateCallback(time)

      const { renderer, scene, camera } = sceneRef.current
      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }

      sceneRef.current.animationId = requestAnimationFrame(animate)
    }

    animate(0)
  }

  const handleResize = useCallback(() => {
    if (!containerRef.current) return

    const { camera, renderer } = sceneRef.current
    const { clientWidth, clientHeight } = containerRef.current

    if (camera) {
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    if (renderer) {
      renderer.setSize(clientWidth, clientHeight)
    }
  }, [containerRef])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize)

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      dispose()
    }
  }, [containerRef, handleResize])

  return {
    isReady,
    scene: sceneRef.current.scene,
    camera: sceneRef.current.camera,
    renderer: sceneRef.current.renderer,
    initializeScene,
    startAnimation,
    dispose,
  }
}
