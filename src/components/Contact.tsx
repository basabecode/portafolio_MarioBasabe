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

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const Contact = ({ isVisible }: ContactProps) => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
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
      setForm(INITIAL_FORM)
    }, 1200)
  }

  return (
    <section
      id="contacto"
      data-observe-section
      className="section-shell"
      aria-labelledby="contacto-title"
    >
      <div className="page-shell flex flex-col gap-16">
        <header
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
            Contacto
          </p>
          <h2
            id="contacto-title"
            className="max-w-2xl text-balance text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white"
          >
            ¿Listo para crear algo extraordinario?
          </h2>
          <p className="max-w-3xl text-balance text-[1.125rem] leading-[1.6] text-white/70">
            Agenda una llamada, comparte tu idea o envíame el brief de tu proyecto. Respondo en menos de 24 h con próximos pasos claros.
          </p>
        </header>

        <div
          className={`grid gap-10 lg:grid-cols-[1.05fr_0.95fr] ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-3 opacity-95'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.9)] p-8 shadow-[0_32px_80px_-60px_rgba(9,12,22,0.9)]"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={event => handleChange('name', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    errors.name ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="Escribe tu nombre"
                  autoComplete="name"
                  required
                />
                {errors.name && <span className="text-xs text-red-300">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={event => handleChange('email', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    errors.email ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="hola@tuempresa.com"
                  autoComplete="email"
                  required
                />
                {errors.email && <span className="text-xs text-red-300">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2 text-left sm:col-span-2">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                  Empresa / Equipo
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={event => handleChange('company', event.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  placeholder="Nombre del proyecto o empresa"
                />
              </div>

              <div className="flex flex-col gap-2 text-left sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={event => handleChange('message', event.target.value)}
                  className={`rounded-2xl border px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                    errors.message ? 'border-red-400/50 bg-red-400/10' : 'border-white/10 bg-white/5'
                  }`}
                  placeholder="Cuéntame sobre objetivos, desafíos y plazos..."
                  required
                />
                {errors.message && <span className="text-xs text-red-300">{errors.message}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-3 text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
              {submitted && (
                <p className="text-sm text-emerald-300">
                  ¡Gracias! Recibí tu mensaje y te responderé pronto.
                </p>
              )}
              <p className="text-xs text-white/45">
                La información que compartas se mantiene privada. Podemos firmar un NDA si lo necesitas.
              </p>
            </div>
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(10,14,24,0.85)] p-8 shadow-[0_28px_70px_-55px_rgba(8,12,24,0.85)]">
              <div className="flex flex-col gap-6 text-left text-white/80">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-secondary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/50">
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-secondary">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/50">
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-secondary">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/50">
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

            <div className="rounded-[2rem] border border-white/10 bg-[rgba(8,12,22,0.85)] p-8 shadow-[0_28px_70px_-55px_rgba(8,12,24,0.85)]">
              <p className="text-sm font-semibold text-white/80">Disponibilidad actual</p>
              <p className="mt-2 text-sm text-white/60">
                Acepto proyectos a partir de octubre 2025. Las sesiones de consultoría y mentorías están abiertas bajo agenda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

