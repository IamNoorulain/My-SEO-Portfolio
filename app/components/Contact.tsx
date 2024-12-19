import { Mail, Linkedin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Get In Touch</h2>
        <div className="max-w-md mx-auto space-y-6 px-4">
          <a href="mailto:0noorulain@gmail.com" className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors duration-300">
            <Mail size={24} />
            <span>0noorulain@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/noorulain-ahmed-seo-expert-and-digital-marketing-specialist/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors duration-300">
            <Linkedin size={24} />
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://wa.me/+923116550134" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-lg hover:text-gray-300 transition-colors duration-300">
            <Phone size={24} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}


