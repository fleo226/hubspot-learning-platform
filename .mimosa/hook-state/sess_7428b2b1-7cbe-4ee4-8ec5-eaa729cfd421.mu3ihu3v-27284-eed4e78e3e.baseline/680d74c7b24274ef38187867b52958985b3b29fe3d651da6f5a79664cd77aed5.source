import { modules } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function ModulePage({
  params,
}: {
  params: { moduleId: string }
}) {
  const module = modules.find((m) => m.id === params.moduleId)
  if (!module) {
    return <div>Module not found</div>
  }

  return (
    <div className="space-y-12">
      {/* Module Header */}
      <section className="py-8 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-6">
            <div className={`${module.color} w-10 h-10 rounded flex items-center justify-center mr-4`}>
              <module.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-navy">{module.title}</h1>
              <p className="text-slate-600">{module.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            {module.lessons.map((lesson) => (
              <Link key={lesson.id} href={`/modules/${module.id}/lessons/${lesson.id}`} className="hover:underline">
                <Badge variant="outline">{lesson.title}</Badge>
              </Link>
            ))}
          </div>
          <Button className="btn-primary" asChild>
            <Link href={`/modules/${module.id}/lessons/${module.lessons[0].id}`}>
              Commencer la première leçon
            </Link>
          </Button>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Leçons du parcours
          </h2>
          <div className="space-y-6">
            {module.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/modules/${module.id}/lessons/${lesson.id}`}
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="bg-navy/10 text-navy w-10 h-10 rounded flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy mb-2">{lesson.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{lesson.description}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="outline">Leçon {index + 1}</Badge>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}