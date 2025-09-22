import React from 'react'
import { useWebGL } from '@/hooks/useWebGL'

interface WebGLFallbackProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  loadingComponent?: React.ReactNode
}

const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  children,
  fallback,
  loadingComponent,
}) => {
  const { hasWebGL, isLoading } = useWebGL()

  if (isLoading) {
    return (
      <>
        {loadingComponent || (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
          </div>
        )}
      </>
    )
  }

  if (!hasWebGL) {
    return (
      <>
        {fallback || (
          <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-slate-600 text-sm">
                Tu navegador no soporta WebGL
              </p>
              <p className="text-slate-500 text-xs mt-2">
                Intenta actualizar tu navegador para ver los efectos 3D
              </p>
            </div>
          </div>
        )}
      </>
    )
  }

  return <>{children}</>
}

export default WebGLFallback
