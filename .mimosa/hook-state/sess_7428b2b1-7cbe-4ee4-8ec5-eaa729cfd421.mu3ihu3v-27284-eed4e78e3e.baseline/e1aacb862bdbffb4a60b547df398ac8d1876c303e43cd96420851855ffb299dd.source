import { modules } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: { moduleId: string; lessonId: string }
}) {
  const module = modules.find((m) => m.id === params.moduleId)
  if (!module) {
    return <div>Module not found</div>
  }

  const lesson = module.lessons.find((l) => l.id === params.lessonId)
  if (!lesson) {
    return <div>Leçon non trouvée</div>
  }

  // Determine previous and next lesson indices
  const currentIndex = module.lessons.findIndex((l) => l.id === params.lessonId)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < module.lessons.length - 1
  const previousLesson = hasPrevious ? module.lessons[currentIndex - 1] : null
  const nextLesson = hasNext ? module.lessons[currentIndex + 1] : null

  return (
    <div className="space-y-8">
      {/* Lesson Header */}
      <section className="py-8 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-6">
            <div className={`${module.color} w-10 h-10 rounded flex items-center justify-center mr-4`}>
              <module.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy">{lesson.title}</h1>
              <p className="text-slate-600">{lesson.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{lesson.estimatedTime}</span>
            </div>
            <span className="flex items-center gap-1">
              <Badge variant="outline">Leçon {currentIndex + 1}/{module.lessons.length}</Badge>
            </span>
          </div>
          <Button className="btn-primary" asChild>
            <Link href={lesson.articleUrl} target="_blank" rel="noopener noreferrer">
              Lire l'article complet sur HubSpot
            </Link>
          </Button>
        </div>
      </section>

      {/* Lesson Content (Placeholder) */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200">
            <div className="p-6">
              <h2 className="text-xl font-bold text-navy mb-4">
                Résumé de la leçon
              </h2>
              <p className="text-slate-600 mb-4">
                Dans la version complète de cette plateforme, nous récupérerions le contenu complet de l'article depuis HubSpot via leur API ou nous aurions intégré le contenu directement.
              </p>
              <p className="text-slate-600 mb-4">
                Pour le moment, vous pouvez accéder à l'article original en cliquant sur le bouton ci-dessus.
              </p>
              <div className="bg-slate-50 p-4 rounded mt-6">
                <h3 className="font-semibold text-navy mb-2">
                  Points clés à retenir
                </h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Point clé 1 basé sur l'article</li>
                  <li>Point clé 2 basé sur l'article</li>
                  <li>Point clé 3 basé sur l'article</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            {hasPrevious && previousLesson && (
              <Link
                href={`/modules/${module.id}/lessons/${previousLesson.id}`}
                className="flex items-center gap-3 text-slate-600 hover:text-navy"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{previousLesson.title}</span>
              </Link>
            )}
            {hasNext && nextLesson && (
              <Link
                href={`/modules/${module.id}/lessons/${nextLesson.id}`}
                className="flex items-center gap-3 text-slate-600 hover:text-navy"
              >
                <span>{nextLesson.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}