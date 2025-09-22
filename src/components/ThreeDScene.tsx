import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@/hooks/useThree'

interface ThreeDSceneProps {
  containerRef: React.RefObject<HTMLDivElement>
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ containerRef }) => {
  const { isReady, scene, camera, renderer, initializeScene, startAnimation } =
    useThree(containerRef)

  const meshRef = useRef<THREE.Group | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  // Initialize the 3D scene
  useEffect(() => {
    if (!containerRef.current) return

    const result = initializeScene()
    if (!result) return

    const { scene, camera } = result

    // Create geometry group
    const group = new THREE.Group()
    meshRef.current = group

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 32, 32),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.TorusGeometry(0.7, 0.3, 16, 100),
    ]

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x6366f1,
        metalness: 0.7,
        roughness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.5,
        roughness: 0.3,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        metalness: 0.6,
        roughness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        metalness: 0.4,
        roughness: 0.4,
      }),
    ]

    // Create meshes
    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, materials[index])

      // Position meshes in a circle
      const angle = (index / geometries.length) * Math.PI * 2
      mesh.position.x = Math.cos(angle) * 2
      mesh.position.z = Math.sin(angle) * 2
      mesh.position.y = (Math.random() - 0.5) * 2

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI

      group.add(mesh)
    })

    scene.add(group)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x6366f1, 0.8, 100)
    pointLight.position.set(-5, 5, 5)
    scene.add(pointLight)

    // Camera position
    camera.position.set(0, 0, 8)
  }, [initializeScene, containerRef])

  // Animation loop
  useEffect(() => {
    if (!isReady || !meshRef.current) return

    let animationTime = 0

    const animate = (time: number) => {
      animationTime = time * 0.001 // Convert to seconds

      if (meshRef.current) {
        // Rotate the entire group
        meshRef.current.rotation.y = animationTime * 0.2

        // Individual mesh animations
        meshRef.current.children.forEach((mesh, index) => {
          if (mesh instanceof THREE.Mesh) {
            mesh.rotation.x = animationTime * (0.5 + index * 0.1)
            mesh.rotation.z = animationTime * (0.3 + index * 0.05)

            // Floating animation
            mesh.position.y = Math.sin(animationTime * 2 + index) * 0.5
          }
        })

        // Mouse interaction
        const targetX = mouseRef.current.x * 0.001
        const targetY = mouseRef.current.y * 0.001

        meshRef.current.rotation.x +=
          (targetY - meshRef.current.rotation.x) * 0.05
        meshRef.current.rotation.y +=
          (targetX - meshRef.current.rotation.y) * 0.05
      }
    }

    startAnimation(animate)
  }, [isReady, startAnimation])

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.x = event.clientX - rect.left - rect.width / 2
      mouseRef.current.y = event.clientY - rect.top - rect.height / 2
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [containerRef])

  return null // The rendering is handled by useThree hook
}

export default ThreeDScene
