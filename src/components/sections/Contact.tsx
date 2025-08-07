import { BrutalButton } from "@/components/ui/brutal-button"
import { Mail, Github, MessageCircle, ExternalLink, MapPin } from "lucide-react"

export const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "mrussy@yandex.ru",
      href: "mailto:mrussy@yandex.ru",
      icon: Mail,
      color: "bg-pixel-lime"
    },
    {
      name: "GitHub", 
      value: "alexDyakonov",
      href: "https://github.com/alexDyakonov",
      icon: Github,
      color: "bg-pixel-blue"
    },
    {
      name: "Telegram",
      value: "schlafzucker",
      href: "https://t.me/schlafzucker",
      icon: MessageCircle,
      color: "bg-secondary"
    },
    {
      name: "Habr",
      value: "Habr Profile",
      href: "#",
      icon: ExternalLink,
      color: "bg-pixel-dark"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-surface relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pixel-blue border-2 border-pixel-dark opacity-20 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-pixel-lime border-2 border-pixel-dark opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-brutal text-3xl md:text-5xl mb-4 text-pixel-dark">
              СВЯЗАТЬСЯ СО МНОЙ
            </h2>
            <div className="w-24 h-1 bg-pixel-dark mx-auto mb-6"></div>
            <p className="text-lg font-grotesk max-w-2xl mx-auto text-pixel-dark">
              Готов обсудить интересные проекты, вакансии в области DevOps 
              или просто пообщаться о технологиях
            </p>
          </div>
          
          {/* Main CTA */}
          <div className="card-brutal p-8 mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pixel-lime border-2 border-pixel-dark flex items-center justify-center">
                <Mail className="w-8 h-8 text-pixel-dark" />
              </div>
              <div className="text-left">
                <h3 className="text-brutal text-xl text-pixel-dark">ОСНОВНОЙ КОНТАКТ</h3>
                {/* Сохраняю исправление контрастности для email */}
                <p className="text-pixel-dark font-mono">mrussy@yandex.ru</p>
              </div>
            </div>
            
            <BrutalButton 
              variant="pixel"
              size="pixelLg"
              asChild
            >
              <a href="mailto:mrussy@yandex.ru">
                <Mail className="w-5 h-5" />
                НАПИСАТЬ EMAIL
              </a>
            </BrutalButton>
          </div>
          
          {/* Social Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <div key={index} className="card-brutal p-6 text-center group hover:scale-105 transition-transform">
                  <div className={`w-12 h-12 ${link.color} border-2 border-pixel-dark flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-pixel-dark" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-pixel-dark">{link.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{link.value}</p>
                  <BrutalButton 
                    variant="pixelOutline" 
                    size="sm"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      ПЕРЕЙТИ
                    </a>
                  </BrutalButton>
                </div>
              )
            })}
          </div>
          
          {/* Location */}
          <div className="card-brutal p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              {/* Сохраняю исправление контрастности для иконки */}
              <MapPin className="w-5 h-5 text-pixel-dark" />
              <span className="font-bold text-lg text-pixel-dark">ЛОКАЦИЯ</span>
            </div>
            <p className="text-muted-foreground">Санкт-Петербург, Россия</p>
            <p className="text-sm text-muted-foreground mt-1">Готов к удаленной работе</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}