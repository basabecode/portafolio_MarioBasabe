
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6 text-slate-900">
          <Mail size={20} />
          Get In Touch
        </h2>
        <p className="text-slate-700 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <Button 
          className="bg-transparent text-slate-900 border-2 border-slate-800 hover:bg-slate-800 hover:text-[#DEB887]"
          size="lg"
          onClick={() => window.location.href = 'mailto:hello@mariobasabe.com'}
        >
          Say Hello
        </Button>
      </div>
    </section>
  );
};

export default Contact;
