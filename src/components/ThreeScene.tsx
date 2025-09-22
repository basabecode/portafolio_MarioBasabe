import React, { useRef, useEffect, Suspense, lazy } from 'react'
import WebGLFallback from './WebGLFallback'

// Lazy load del componente 3D para code splitting
const ThreeDScene = lazy(() => import('./ThreeDScene'))

interface ThreeSceneProps {
  className?: string
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const fallbackComponent = (
    <div
      className={`relative w-full h-full bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Frontend Developer
          </h3>
          <p className="text-slate-600 max-w-xs">
            Creando experiencias digitales interactivas con tecnologías modernas
          </p>
        </div>
      </div>
    </div>
  )

  const loadingComponent = (
    <div
      className={`relative w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-slate-600">Cargando experiencia 3D...</p>
        </div>
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <WebGLFallback
        fallback={fallbackComponent}
        loadingComponent={loadingComponent}
      >
        <Suspense fallback={loadingComponent}>
          <ThreeDScene containerRef={containerRef} />
        </Suspense>
      </WebGLFallback>
    </div>
  )
}

export default ThreeScene
