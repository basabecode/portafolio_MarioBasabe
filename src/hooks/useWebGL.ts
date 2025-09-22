import { useState, useEffect } from 'react'

export const useWebGL = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
        const hasSupport = !!gl

        if (hasSupport && gl) {
          // Test for required extensions
          const requiredExtensions = ['OES_standard_derivatives']
          const hasExtensions = requiredExtensions.every(ext =>
            gl.getExtension(ext)
          )
          setHasWebGL(hasExtensions)
        } else {
          setHasWebGL(false)
        }
      } catch (error) {
        console.warn('WebGL detection failed:', error)
        setHasWebGL(false)
      } finally {
        setIsLoading(false)
      }
    }

    // Add small delay to avoid blocking initial render
    const timer = setTimeout(checkWebGL, 100)
    return () => clearTimeout(timer)
  }, [])

  return { hasWebGL, isLoading }
}
