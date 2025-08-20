export const en = {
  hero: {
    title: "ALEXANDER",
    subtitle: "DYAKONOV",
    role: "DEVOPS ENGINEER",
    description: "ITMO Student • Kubernetes • Docker • CI/CD",
    description2: "Deployment automation and infrastructure",
    contact: "CONTACT",
    projects: "PROJECTS",
    github: "GITHUB"
  },
  about: {
    title: "ABOUT ME",
    education: {
      title: "EDUCATION",
      university: "ITMO University",
      specialty: "Information Systems and Programming, 09.03.04",
      status: "2nd year Software Engineering student",
      location: "Saint Petersburg • 2022 – 2027",
      additional: "Additional Education",
      courses: [
        "DevOps Fundamentals (ITMO, 2024)",
        "Advanced DevOps Course (NoLabel DevOps, 2023)"
      ]
    },
    achievements: {
      title: "ACHIEVEMENTS",
      items: [
        "1st place at VkusVill track \"Inventory 2.0\"",
        "Winner of \"Student Startup\" grant competition",
        "1st place at Creative Space Hackathon",
        "1st place at NDW Hackathon",
        "1st place at NoLabel Hack in best MVP nomination"
      ]
    },
    skills: {
      title: "TECHNICAL SKILLS",
      devops: "DevOps & Infrastructure",
      languages: "Programming Languages",
      databases: "Databases",
      monitoring: "Monitoring",
      languagesSection: "LANGUAGES",
      devopsSkills: ["Kubernetes", "Docker", "Docker Swarm", "Traefik", "GitHub Actions", "Gitlab Actions"],
      programmingLanguages: ["Go", "Python", "Bash", "SQL"],
      databasesList: ["PostgreSQL", "ClickHouse", "Redis"],
      monitoringTools: ["Grafana", "Prometheus", "Loki", "Portainer"],
      languageLevels: [
        { lang: "Russian", level: "Native", color: "bg-pixel-lime" },
        { lang: "English", level: "C1", color: "bg-pixel-blue" },
        { lang: "German", level: "B2", color: "bg-secondary" }
      ]
    }
  },
  experience: {
    title: "WORK EXPERIENCE",
    current: "CURRENT WORK",
    previous: "PREVIOUS EXPERIENCE",
    internships: "INTERNSHIPS",
    projects: "PROJECTS",
    callToAction: {
      title: "READY FOR NEW CHALLENGES",
      description: "Looking for opportunities to develop in DevOps and cloud technologies. Open to interesting projects and new teams.",
      skills: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    experiences: [
      {
        company: "LLC \"Infotech\"",
        position: "DevOps",
        period: "01.13.2025 – present",
        description: "Supporting development team for \"VTB\" project",
        responsibilities: [
          {
            task: "Support",
            details: "Support and debugging of Kubernetes and Openshift clusters; support and work with infrastructure cluster services PostgreSQL, ClickHouse, Redis, RabbitMQ."
          },
          {
            task: "CI/CD",
            details: "Development of Jenkins and Gitlab CI/CD pipelines; optimized 3 scripts by moving frontend microservices build to servers."
          }
        ]
      },
      {
        company: "ShampsTech",
        position: "DevOps",
        period: "2023 – present",
        description: "Development and support of web services and deployment automation",
        responsibilities: [
          {
            task: "Infrastructure",
            details: "Migration of server infrastructure from 1 server to 4 VMs under Docker Swarm management, with Traefik as ingress controller."
          },
          {
            task: "Databases",
            details: "Management and optimization of PostgreSQL databases. Reduced query execution time in one service by 70%. Using ClickHouse for parser service, Redis for caching."
          },
          {
            task: "DevOps and automation",
            details: "Containerization of services in Docker, writing docker-compose files, setting up GH Actions CI/CD pipelines for building service images and delivering them to servers."
          },
          {
            task: "API Integration",
            details: "Connecting external APIs (2GIS, YooKassa) and authorization systems, as well as setting up ticket generation and e-mail notifications."
          }
        ]
      }
    ]
  },
  blog: {
    title: "MY BLOG",
    subtitle: "Sharing knowledge and experience",
    description: "I write about DevOps, cloud technologies, automation and everything related to modern infrastructure development.",
    topics: ["Kubernetes", "Docker", "CI/CD", "Cloud Technologies", "Automation"],
    cta: "READ BLOG",
    latest: "Latest articles"
  },
  contact: {
    title: "CONTACT ME",
    subtitle: "Ready for new challenges and projects",
    description: "Looking for opportunities to develop in DevOps and cloud technologies. Open to interesting projects and new teams.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "SEND"
    },
    mainContact: "MAIN CONTACT",
    location: "LOCATION",
    locationCity: "Saint Petersburg, Russia",
    goButton: "GO",
    telegramButton: "HIRE ME",
    telegramButtonMobile: "TELEGRAM"
  }
}; 