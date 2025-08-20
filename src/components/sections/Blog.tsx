import { BookOpen } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { BrutalButton } from "@/components/ui/brutal-button"

export const Blog = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 pt-32 md:pt-20 bg-surface relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Single Blog Block */}
          <div className="card-brutal p-12 text-center">
            {/* Icon and Title */}
            <div className="mb-8">
              <h2 className="text-brutal text-3xl md:text-4xl mb-4 text-pixel-dark">
                {t.blog.title}
              </h2>
              <div className="w-24 h-1 bg-pixel-dark mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.blog.description}
              </p>
            </div>
            
            {/* Topics */}
            <div className="mb-8">
              <h3 className="text-brutal text-lg text-pixel-dark mb-4">Основные темы:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {t.blog.topics.map((topic, index) => (
                  <span key={index} className="bg-pixel-blue text-pixel-dark px-3 py-1 text-xs font-mono border border-pixel-dark">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <BrutalButton 
              variant="pixel" 
              size="pixelLg"
              asChild
            >
              <a href="/blog">
                <BookOpen className="w-5 h-5" />
                {t.blog.cta}
              </a>
            </BrutalButton>
          </div>
        </div>
      </div>
    </section>
  )
} 