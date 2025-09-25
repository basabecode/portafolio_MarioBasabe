# Sistema de Diseño · Portafolio Mario Basabe

## Identidad y dirección visual
- **Personalidad**: sofisticado, tecnológico, confiable.
- **Paleta**: base oscura con acentos neón (violeta, cian, magenta) que refuerzan la narrativa "tech boutique".
- **Mood**: gradients atmosféricos, glassmorphism sutil, sombras suaves para generar profundidad sin sacrificar performance.

## Tokens de color
| Token | Uso principal | Valor |
| --- | --- | --- |
| --background | Fondo global | #060A16 |
| --surface-100 | Tarjetas primarias | gba(15, 18, 28, 0.85) |
| --surface-300 | Overlays / CTA | gba(15, 19, 35, 0.95) |
| --primary | Acciones principales | #6C63FF |
| --secondary | Estados de realce | #22D1EE |
| --accent | Microinteracciones | #FF66C4 |
| --muted-foreground | Texto secundario | #94A3B8 |

Los gradientes clave (--gradient-primary, --gradient-secondary, --gradient-hero) integran los acentos para titular, CTAs y fondos hero.

## Tipografía
- **Headings**: Space Grotesk (pesos 500-700), tracking negativo (-0.025em).
- **Body**: Inter (300-600) optimizado para legibilidad en pantalla.
- **Escalas** (min 5 niveles):
  1. Display 01: 56-64px
  2. Heading 02: 40-48px
  3. Heading 03: 28-32px
  4. Body Large: 18-20px
  5. Body Base: 16px
  6. Small / meta: 12-14px con uppercase + tracking.

## Espaciado
- **Grid base**: --grid-base = 8px.
- Secciones (.section-shell): 8 * base en mobile, 10 * base en desktop ≥ 1440px.
- Componentes (tarjetas, badges, botones) respetan múltiplos de la escala para coherencia visual.

## Componentes clave
1. **Navbar sticky**: estados hover/active con gradiente y progress bar global.
2. **Hero**: CTAs principales ("Ver mis proyectos", "Contactar ahora"), badges de stack y métricas instantáneas.
3. **Servicios**: cards modulares (icono + highlights) con glassmorphism.
4. **Tech Stack visual**: grupos tecnológicos + badges + herramientas de diseño.
5. **Social Proof**: métricas en grid responsivo.
6. **Projects**: layout editorial (quick preview + métricas) y cards secundarias.
7. **Testimonials**: carrusel accesible, auto-play con controles manuales.
8. **About**: storytelling + timeline + skill map + pilares de trabajo.
9. **Process**: 4 fases con deliverables tangibles.
10. **Contacto**: formulario validado en tiempo real, enlaces directos y disponibilidad.

## Interacciones
- hover: elevación (ox-shadow suave) + cambios de borde gradiente.
- ocus: outline/ing con --primary y --secondary (WCAG AA contrastado).
- scroll-progress: barra superior sincronizada con navegación.
- IntersectionObservers: revelan secciones con transiciones suaves (sin reflow pesado).
- Carrusel de testimonios con auto-rotación de 6.5s y fallback controles.

## Breakpoints
- **Mobile**: 320–767px
- **Tablet**: 768–1023px
- **Desktop**: 1024–1439px
- **Large Desktop**: 1440px+

Custom CSS (esponsive.css) ajusta padding de secciones, opacidad de overlays y control de elementos flotantes del hero.

## Accesibilidad
- Contrastes verificados para texto primario/secundario (≥ 4.5:1 en fondos).
- Navegación accesible (ria-label, ria-current).
- Formularios con estados de error y mensajes legibles.
- prefers-reduced-motion respetado para capas animadas.

## Performance
- Componentes y gradients optimizados (sin imágenes pesadas).
- Animaciones GPU-friendly (transform/opacity).
- Layout sin dependencias externas pesadas.
- Preparado para Lighthouse ≥ 90 en Core Web Vitals.

## Próximos pasos sugeridos
- Integrar analytics (PostHog/Segment) en CTA críticos.
- Añadir modo claro reutilizando mismos tokens.
- Preparar assets (CV PDF, imágenes optimizadas) en /public.
