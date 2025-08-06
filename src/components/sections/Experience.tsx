import { Building, Calendar, CheckCircle } from "lucide-react"
import serverIcon from "@/assets/server-icon.png"

export const Experience = () => {
  const experiences = [
    {
      company: "ООО \"Инфотех\"",
      position: "DevOps",
      period: "13.01.2025 – настоящее время",
      description: "Поддержка команды разработчиков по проекту \"ВТБ\"",
      responsibilities: [
        {
          task: "Сопровождение",
          details: "Сопровождение и отладка кластеров Kubernetes и Openshift; сопровождение и работа с инфрастуктурными кластерными сервисами Postgresql, Clickhouse, Redis, RabbitMQ."
        },
        {
          task: "CI/CD",
          details: "Разработка CI/CD пайплайнов Jenkins и Gitlab; оптимизировал 3 скринта, перенеся сборку фронтенда микросервисов на сервера."
        }
      ],
      current: true
    },
    {
      company: "ШампсТех",
      position: "DevOps",
      period: "2023 – настоящее время",
      description: "Разработка и поддержка веб-сервисов и автоматизация развёртывания",
      responsibilities: [
        {
          task: "Инфраструктура",
          details: "Перенос серверной инфраструктуры с 1 сервера на 4 воды под управлением Docker Swarm, с Traefik в качестве ингрес контроллера."
        },
        {
          task: "Базы данных",
          details: "Управление и оптимизация баз данных PostgreSQL. Уменьшил время выполнения запроса в одном сервисе на 70%. Использование ClickHouse для сервиса парсера, Redis для кеширования."
        },
        {
          task: "DevOps и автоматизация",
          details: "Контейнеризация сервисов в Docker, написание docker-compose файлов, настройка CI/CD пайплайнов GH Actions для билда изображений сервисов и их доставки на сервера."
        },
        {
          task: "Интеграция API",
          details: "Подключение внешних API (2GIS, YooKassa) и систем авторизации, а также настройка генерации билетов и отправки e-mail уведомлений."
        }
      ],
      current: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 opacity-20">
        <img src={serverIcon} alt="" className="w-32 h-32 pixel-perfect" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-brutal text-3xl md:text-5xl mb-4">
              ОПЫТ РАБОТЫ
            </h2>
            <div className="w-24 h-1 bg-pixel-dark mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="card-brutal p-8 relative">
                {exp.current && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-pixel-lime text-pixel-dark px-4 py-2 text-xs font-bold border-2 border-pixel-dark shadow-brutal">
                      ТЕКУЩАЯ РАБОТА
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
                        <h3 className="text-brutal text-lg">{exp.company}</h3>
                        <p className="text-pixel-blue font-mono font-bold">{exp.position}</p>
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
                    <h4 className="text-brutal text-lg mb-6">КЛЮЧЕВЫЕ ЗАДАЧИ</h4>
                    
                    <div className="space-y-6">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="border-l-4 border-pixel-lime pl-6">
                          <div className="flex items-center gap-3 mb-2">
                            <CheckCircle className="w-5 h-5 text-pixel-blue" />
                            <h5 className="font-bold text-pixel-blue">{resp.task}</h5>
                          </div>
                          <p className="text-sm leading-relaxed">{resp.details}</p>
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
              <h3 className="text-brutal text-xl mb-4">ГОТОВ К НОВЫМ ВЫЗОВАМ</h3>
              <p className="mb-6">
                Ищу возможности для развития в области DevOps и облачных технологий. 
                Открыт для интересных проектов и новых команд.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-pixel-lime text-pixel-dark px-4 py-2 font-mono text-sm border border-pixel-dark">
                  Docker & Kubernetes
                </div>
                <div className="bg-pixel-blue text-pixel-dark px-4 py-2 font-mono text-sm border border-pixel-dark">
                  CI/CD Pipelines
                </div>
                <div className="bg-secondary text-pixel-dark px-4 py-2 font-mono text-sm border border-pixel-dark">
                  Infrastructure as Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}