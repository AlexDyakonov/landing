import { BookOpen, ArrowLeft, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { BrutalButton } from "@/components/ui/brutal-button"
import { Link } from "react-router-dom"

const BlogPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-pixel-dark text-pixel-lime py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:text-pixel-blue transition-colors">
              <ArrowLeft className="w-6 h-6" />
              <span className="text-brutal text-xl">Назад на сайт</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              <h1 className="text-brutal text-2xl">{t.blog.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Coming Soon Message */}
            <div className="card-brutal p-12 mb-12">
              
              <h2 className="text-brutal text-4xl md:text-5xl mb-6 text-pixel-dark">
                Блог в разработке
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Скоро здесь появятся статьи о DevOps, облачных технологиях, автоматизации и многом другом. 
                Каждая статья будет содержать практические знания и опыт, полученный в работе и обучении.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-brutal text-2xl text-pixel-dark mb-4">
                  Планируемые темы:
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  {t.blog.topics.map((topic, index) => (
                    <span key={index} className="bg-pixel-blue text-pixel-dark px-4 py-2 text-sm font-mono border-2 border-pixel-dark shadow-brutal">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground">
                  Подписывайтесь на обновления или возвращайтесь позже!
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BrutalButton 
                variant="pixel" 
                size="pixelLg"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                  Вернуться на главную
                </Link>
              </BrutalButton>
              
              <BrutalButton 
                variant="pixelOutline" 
                size="pixelLg"
                asChild
              >
                <a href="https://t.me/alexDyakonov" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Связаться в Telegram
                </a>
              </BrutalButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage 