import { useMemo, useState } from 'react'
import { Mail, Linkedin, FileText, Send, Loader2 } from 'lucide-react'

interface ContactProps {
  isVisible: boolean
}

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const Contact = ({ isVisible }: ContactProps) => {
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => {
    const newErrors: Partial<Record<keyof FormState, string>> = {}
    if (!form.name) newErrors.name = 'Ingresa tu nombre.'
    if (!form.email) newErrors.email = 'Necesito un email para responderte.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Ingresa un email válido.'
    }
    if (!form.message) newErrors.message = 'Cuéntame sobre tu proyecto o idea.'
    return newErrors
  }, [form])

  const handleChange = (field: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 1200)
  }

  return (
    <section
      id="contacto"
      data-observe-section
      className="section-shell"
      aria-labelledby="contacto-title"
    >
      <div className="page-shell">
        <div
          className={`flex flex-col items-center gap-6 pb-12 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <span className="pill-badge">Contacto</span>
          <h2
            id="contacto-title"
            className="text-balance text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            ¿Listo para crear algo extraordinario?
          </h2>
          <p className="max-w-2xl text-balance text-sm text-white/70 sm:text-base">
            Agenda una llamada, comparte tu idea o envíame el brief de tu proyecto. Respondo en menos de 24h con próximos pasos claros.
          </p>
        </div>

        <div
          className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.9)] p-8 backdrop-blur-xl"
            noValidate
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-700" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={event => handleChange('name', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                    errors.name ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="Escribe tu nombre"
                  autoComplete="name"
                  required
                />
                {errors.name && (
                  <span className="text-xs text-red-300">{errors.name}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={event => handleChange('email', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                    errors.email ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="hola@tuempresa.com"
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <span className="text-xs text-red-300">{errors.email}</span>
                )}
              </div>

              <div className="flex flex-col gap-2 text-left sm:col-span-2">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Empresa / Equipo
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={event => handleChange('company', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Nombre del proyecto o empresa"
                />
              </div>

              <div className="flex flex-col gap-2 text-left sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={event => handleChange('message', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                    errors.message ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="Cuéntame sobre objetivos, desafíos y plazos..."
                  required
                />
                {errors.message && (
                  <span className="text-xs text-red-300">{errors.message}</span>
                )}
              </div>
            </div>

            <div className="relative flex flex-col gap-4 text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-sm text-emerald-300">
                  ¡Gracias! Recibí tu mensaje y te responderé pronto.
                </p>
              )}
              <p className="text-xs text-white/40">
                La información que compartas se mantiene privada. Podemos firmar un NDA si lo necesitas.
              </p>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(12,16,28,0.85)] p-8 backdrop-blur-xl">
              <div className="flex flex-col gap-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-secondary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      Email directo
                    </p>
                    <a
                      href="mailto:hello@mariobasabe.com"
                      className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                    >
                      hello@mariobasabe.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-secondary">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      Conecta en LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                    >
                      linkedin.com/in/mariobasabe
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-secondary">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      Descargar CV
                    </p>
                    <a
                      href="/MarioBasabe_CV.pdf"
                      className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                    >
                      CV actualizado (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[rgba(8,12,22,0.85)] p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white/80">
                Disponibilidad actual
              </p>
              <p className="mt-2 text-sm text-white/60">
                Acepto proyectos a partir de octubre 2025. Sesiones de consultoría y mentorías están abiertas bajo agenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
