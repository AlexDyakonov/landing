import { GraduationCap, Award, MapPin } from "lucide-react"

export const About = () => {
  return (
    <section id="about" className="py-20 bg-surface relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-brutal text-3xl md:text-5xl mb-4 text-pixel-dark">
              ОБО МНЕ
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
                  <h3 className="text-brutal text-xl text-pixel-dark">ОБРАЗОВАНИЕ</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pixel-blue pl-4">
                    <h4 className="font-grotesk font-bold text-lg text-pixel-dark">Университет ИТМО</h4>
                    <p className="text-muted-foreground">НОЦ Инфохимии</p>
                    <p className="text-sm text-pixel-dark">Студент 2-го курса Software Engineering</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Санкт-Петербург • 2022 – 2024</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-pixel-lime pl-4">
                    <h4 className="font-grotesk font-bold text-pixel-dark">Дополнительное образование</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Основы DevOps (ИТМО, 2024)</li>
                      <li>• Продвинутый курс по DevOps (NoLabel DevOps, 2023)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card-brutal p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pixel-blue border-2 border-pixel-dark flex items-center justify-center">
                    <Award className="w-6 h-6 text-pixel-dark" />
                  </div>
                  <h3 className="text-brutal text-xl text-pixel-dark">ДОСТИЖЕНИЯ</h3>
                </div>
                
                <div className="grid gap-3">
                  {[
                    "1 место на Вкусвилл по треку \"Инвентаризация 2.0\"",
                    "Победитель грантового конкурса \"Студенческий Стартап\"",
                    "1 место на Creative Space Hackathon",
                    "1 место на NDW Hackathon",
                    "1 место на NoLabel Hack в номинации лучший МVP"
                  ].map((achievement, index) => (
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
                <h3 className="text-brutal text-xl mb-6 text-pixel-dark">ТЕХНИЧЕСКИЕ НАВЫКИ</h3>
                
                <div className="space-y-6">
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">DevOps & Инфраструктура</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Kubernetes", "Docker", "Docker Swarm", "Traefik", "GitHub Actions", "Gitlab Actions"].map((skill) => (
                        <span key={skill} className="bg-pixel-dark text-pixel-lime px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">Языки программирования</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Java Core", "Python", "Bash", "SQL"].map((lang) => (
                        <span key={lang} className="bg-pixel-lime text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">Базы данных</h4>
                    <div className="flex flex-wrap gap-2">
                      {["PostgreSQL", "ClickHouse", "Redis"].map((db) => (
                        <span key={db} className="bg-pixel-blue text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {db}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {/* Сохраняю исправление контрастности */}
                    <h4 className="font-bold text-pixel-dark mb-3">Мониторинг</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Grafana", "Prometheus", "Loki", "Portainer"].map((tool) => (
                        <span key={tool} className="bg-secondary text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-brutal p-8">
                <h3 className="text-brutal text-xl mb-6 text-pixel-dark">ЯЗЫКИ</h3>
                
                <div className="space-y-4">
                  {[
                    { lang: "Русский", level: "Native", color: "bg-pixel-lime" },
                    { lang: "Английский", level: "C1", color: "bg-pixel-blue" },
                    { lang: "Немецкий", level: "B2", color: "bg-secondary" }
                  ].map((language) => (
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