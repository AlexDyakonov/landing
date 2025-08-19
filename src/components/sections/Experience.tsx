import { Building, Calendar, CheckCircle } from "lucide-react"
import serverIcon from "@/assets/server-icon.png"
import { useLanguage } from "@/hooks/useLanguage"

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 pt-32 md:pt-20 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 opacity-20">
        <img src={serverIcon} alt="" className="w-32 h-32 pixel-perfect" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-brutal text-3xl md:text-5xl mb-4 text-pixel-dark">
              {t.experience.title}
            </h2>
            <div className="w-24 h-1 bg-pixel-dark mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {t.experience.experiences.map((exp, index) => (
              <div key={index} className="card-brutal p-8 relative">
                {index === 0 && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-pixel-lime text-pixel-dark px-4 py-2 text-xs font-bold border-2 border-pixel-dark shadow-brutal">
                      {t.experience.current}
                    </div>
                  </div>
                )}
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-pixel-blue border-2 border-pixel-dark flex items-center justify-center">
                        <Building className="w-6 h-6 text-pixel-dark" />
                      </div>
                      <div>
                        <h3 className="text-brutal text-lg text-pixel-dark">{exp.company}</h3>
                        {/* Сохраняю исправление контрастности */}
                        <p className="text-pixel-dark font-mono font-bold">{exp.position}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-mono">{exp.period}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="lg:col-span-2">
                    <div className="grid gap-6">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex gap-4">
                          <div className="w-6 h-6 bg-pixel-lime border-2 border-pixel-dark flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-3 h-3 text-pixel-dark" />
                          </div>
                          <div>
                            <h4 className="font-grotesk font-bold text-pixel-dark mb-2">{resp.task}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{resp.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card-brutal p-8 max-w-2xl mx-auto">
              <h3 className="text-brutal text-xl mb-4 text-pixel-dark">{t.experience.callToAction.title}</h3>
              <p className="mb-6 text-pixel-dark">
                {t.experience.callToAction.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {t.experience.callToAction.skills.map((skill, index) => (
                  <div key={index} className={`${
                    index === 0 ? 'bg-pixel-lime' : 
                    index === 1 ? 'bg-pixel-blue' : 'bg-secondary'
                  } text-pixel-dark px-4 py-2 font-mono text-sm border border-pixel-dark`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}