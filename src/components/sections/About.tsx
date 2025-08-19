import { GraduationCap, Award, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 pt-32 md:pt-20 bg-surface relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-brutal text-3xl md:text-5xl mb-4 text-pixel-dark">
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-pixel-dark mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div className="card-brutal p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pixel-lime border-2 border-pixel-dark flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-pixel-dark" />
                  </div>
                  <h3 className="text-brutal text-xl text-pixel-dark">{t.about.education.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pixel-blue pl-4">
                    <h4 className="font-grotesk font-bold text-lg text-pixel-dark">{t.about.education.university}</h4>
                    <p className="text-muted-foreground">{t.about.education.specialty}</p>
                    <p className="text-sm text-pixel-dark">{t.about.education.status}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{t.about.education.location}</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-pixel-lime pl-4">
                    <h4 className="font-grotesk font-bold text-pixel-dark">{t.about.education.additional}</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      {t.about.education.courses.map((course, index) => (
                        <li key={index}>• {course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card-brutal p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pixel-blue border-2 border-pixel-dark flex items-center justify-center">
                    <Award className="w-6 h-6 text-pixel-dark" />
                  </div>
                  <h3 className="text-brutal text-xl text-pixel-dark">{t.about.achievements.title}</h3>
                </div>
                
                <div className="grid gap-3">
                  {t.about.achievements.items.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-pixel-lime border border-pixel-dark mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Skills & Languages */}
            <div className="space-y-8">
              <div className="card-brutal p-8">
                <h3 className="text-brutal text-xl mb-6 text-pixel-dark">{t.about.skills.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">{t.about.skills.devops}</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.about.skills.devopsSkills.map((skill) => (
                        <span key={skill} className="bg-pixel-dark text-pixel-lime px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">{t.about.skills.languages}</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.about.skills.programmingLanguages.map((lang) => (
                        <span key={lang} className="bg-pixel-lime text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">{t.about.skills.databases}</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.about.skills.databasesList.map((db) => (
                        <span key={db} className="bg-pixel-blue text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">{t.about.skills.monitoring}</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.about.skills.monitoringTools.map((tool) => (
                        <span key={tool} className="bg-pixel-blue text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-brutal p-8">
                <h3 className="text-brutal text-xl mb-6 text-pixel-dark">{t.about.skills.languagesSection}</h3>
                
                <div className="space-y-4">
                  {t.about.skills.languageLevels.map((language) => (
                    <div key={language.lang} className="flex justify-between items-center">
                      <span className="font-grotesk font-medium text-pixel-dark">{language.lang}</span>
                      <span className={`${language.color} text-pixel-dark px-3 py-1 text-sm font-mono border border-pixel-dark`}>
                        {language.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}