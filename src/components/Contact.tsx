import { Mail, Send, MessageCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24 relative z-10">
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="group flex items-center gap-3 text-white">
              <div className="relative">
                <MessageCircle
                  size={28}
                  className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300"
                />
                <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                Contáctame
              </h2>
              <Sparkles size={20} className="text-cyan-300 animate-pulse" />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8 hover:bg-white/10 transition-all duration-300 group">
            <Mail
              size={48}
              className="text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
              Actualmente estoy buscando nuevas oportunidades. Si tienes alguna
              pregunta o solo quieres saludar, ¡haré mi mejor esfuerzo para
              responderte!
            </p>

            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <Button
                className="relative bg-black/50 backdrop-blur-sm text-white border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:border-cyan-400 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-2xl font-semibold"
                size="lg"
                onClick={() =>
                  (window.location.href = 'mailto:hello@mariobasabe.com')
                }
              >
                <Send size={20} className="mr-2" />
                ¡Salúdame!
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              O encuéntrame en las redes sociales
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
