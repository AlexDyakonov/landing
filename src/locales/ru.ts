export const ru = {
  hero: {
    title: "АЛЕКСАНДР",
    subtitle: "ДЬЯКОНОВ",
    role: "DEVOPS ENGINEER",
    description: "Студент ИТМО • Kubernetes • Docker • CI/CD",
    description2: "Автоматизация развёртывания и инфраструктура",
    contact: "СВЯЗАТЬСЯ",
    projects: "ПРОЕКТЫ",
    github: "GITHUB"
  },
  about: {
    title: "ОБО МНЕ",
    education: {
      title: "ОБРАЗОВАНИЕ",
      university: "Университет ИТМО",
      specialty: "Информационные системы и программирование, 09.03.04",
      status: "Студент 2-го курса Software Engineering",
      location: "Санкт-Петербург • 2022 – 2027",
      additional: "Дополнительное образование",
      courses: [
        "Основы DevOps (ИТМО, 2024)",
        "Продвинутый курс по DevOps (NoLabel DevOps, 2023)"
      ]
    },
    achievements: {
      title: "ДОСТИЖЕНИЯ",
      items: [
        "1 место на Вкусвилл по треку \"Инвентаризация 2.0\"",
        "Победитель грантового конкурса \"Студенческий Стартап\"",
        "1 место на Creative Space Hackathon",
        "1 место на NDW Hackathon",
        "1 место на NoLabel Hack в номинации лучший МVP"
      ]
    },
    skills: {
      title: "ТЕХНИЧЕСКИЕ НАВЫКИ",
      devops: "DevOps & Инфраструктура",
      languages: "Языки программирования",
      databases: "Базы данных",
      monitoring: "Мониторинг",
      languagesSection: "ЯЗЫКИ",
      devopsSkills: ["Kubernetes", "Docker", "Docker Swarm", "Traefik", "GitHub Actions", "Gitlab Actions"],
      programmingLanguages: ["Go", "Python", "Bash", "SQL"],
      databasesList: ["PostgreSQL", "ClickHouse", "Redis"],
      monitoringTools: ["Grafana", "Prometheus", "Loki", "Portainer"],
      languageLevels: [
        { lang: "Русский", level: "Native", color: "bg-pixel-lime" },
        { lang: "Английский", level: "C1", color: "bg-pixel-blue" },
        { lang: "Немецкий", level: "B2", color: "bg-secondary" }
      ]
    }
  },
  experience: {
    title: "ОПЫТ РАБОТЫ",
    current: "ТЕКУЩАЯ РАБОТА",
    previous: "ПРЕДЫДУЩИЙ ОПЫТ",
    internships: "СТАЖИРОВКИ",
    projects: "ПРОЕКТЫ",
    callToAction: {
      title: "ГОТОВ К НОВЫМ ВЫЗОВАМ",
      description: "Ищу возможности для развития в области DevOps и облачных технологий. Открыт для интересных проектов и новых команд.",
      skills: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    experiences: [
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
        ]
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
        ]
      }
    ]
  },
  blog: {
    title: "МОЙ БЛОГ",
    subtitle: "Делимся знаниями и опытом",
    description: "Пишу о DevOps, облачных технологиях, автоматизации и всём, что связано с современной разработкой инфраструктуры.",
    topics: ["Kubernetes", "Docker", "CI/CD", "Облачные технологии", "Автоматизация"],
    cta: "ЧИТАТЬ БЛОГ",
    latest: "Последние статьи"
  },
  contact: {
    title: "СВЯЗАТЬСЯ СО МНОЙ",
    subtitle: "Готов к новым вызовам и проектам",
    description: "Ищу возможности для развития в области DevOps и облачных технологий. Открыт для интересных проектов и новых команд.",
    form: {
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      send: "ОТПРАВИТЬ"
    },
    mainContact: "ОСНОВНОЙ КОНТАКТ",
    location: "РАСПОЛОЖЕНИЕ",
    locationCity: "Санкт-Петербург, Россия",
    goButton: "ПЕРЕЙТИ",
    telegramButton: "НАНЯТЬ МЕНЯ",
    telegramButtonMobile: "TELEGRAM"
  }
}; 