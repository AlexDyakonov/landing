import { BrutalButton } from "@/components/ui/brutal-button"
import { ArrowDown, Github, Mail, ExternalLink } from "lucide-react"
import heroAvatar from "@/assets/hero-avatar.png"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center grid-pattern relative overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pixel-blue border-2 border-pixel-dark animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pixel-lime border-2 border-pixel-dark rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-secondary border-2 border-pixel-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={heroAvatar} 
                alt="Александр Дьяконов" 
                className="w-32 h-32 md:w-48 md:h-48 pixel-perfect border-4 border-pixel-dark shadow-brutal"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pixel-blue border-2 border-pixel-dark animate-bounce"></div>
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="text-brutal text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="block">АЛЕКСАНДР</span>
            {/* Сохраняю исправление контрастности */}
            <span className="glitch text-pixel-dark" data-text="ДЬЯКОНОВ">ДЬЯКОНОВ</span>
          </h1>
          
          {/* Subtitle */}
          <div className="mb-8">
            <div className="inline-block bg-pixel-dark text-pixel-lime px-6 py-3 border-2 border-pixel-dark shadow-brutal text-pixel font-bold uppercase tracking-wider">
              DEVOPS ENGINEER
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-grotesk leading-relaxed text-pixel-dark">
            <span className="block sm:inline">Студент ИТМО • Kubernetes • Docker • CI/CD</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              {/* Сохраняю исправление контрастности */}
              <span className="text-pixel-dark font-bold">Автоматизация развёртывания и инфраструктура</span>
            </span>
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <BrutalButton 
              variant="pixel" 
              size="pixelLg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              СВЯЗАТЬСЯ
            </BrutalButton>
            
            <BrutalButton 
              variant="pixelSecondary" 
              size="pixelLg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="w-5 h-5" />
              ПРОЕКТЫ
            </BrutalButton>
            
            <BrutalButton 
              variant="pixelOutline" 
              size="pixelLg"
              asChild
            >
              <a href="https://github.com/alexDyakonov" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GITHUB
              </a>
            </BrutalButton>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="w-8 h-8 mx-auto text-pixel-dark cursor-pointer hover:text-pixel-blue transition-colors cursor-target"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  )
}