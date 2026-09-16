import { modules } from "@/lib/data"
import Link from "next/link"
import { HeroPill } from "@/components/ui/hero-pill"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, BookOpen, GraduationCap, Code } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-16 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-6">
            Maîtrisez le marketing à l'ère de l'IA
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Des frameworks éprouvés, des outils pratiques et une communauté de marketers qui réussissent avec l'intelligence artificielle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link href="/modules/ia-marketing" className="hover:underline">
              <HeroPill>IA Marketing</HeroPill>
            </Link>
            <Link href="/modules/strategie-croissance" className="hover:underline">
              <HeroPill>Stratégie</HeroPill>
            </Link>
            <Link href="/modules/contenu-engagement" className="hover:underline">
              <HeroPill>Contenu</HeroPill>
            </Link>
            <Link href="/modules/outils-pratiques" className="hover:underline">
              <HeroPill>Outils</HeroPill>
            </Link>
          </div>
          <Button className="btn-primary" asChild>
            <Link href="/modules/ia-marketing">
              Commencer gratuitement
            </Link>
          </Button>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Parcours d'apprentissage
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/modules/${module.id}`}
                className="group"
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-start mb-4">
                    <div className={`${module.color} w-8 h-8 rounded flex items-center justify-center mr-3`}>
                      <module.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{module.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-navy">
                      {module.lessons.length} leçons
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      Voir le parcours
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Rejoignez 5,000+ marketers qui transforment leur carrière
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Accès gratuit à tous les cours, templates et outils. Aucune carte bancaire requise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/modules/ia-marketing" className="hover:underline">
              <Button variant="outline">IA Marketing</Button>
            </Link>
            <Link href="/modules/strategie-croissance" className="hover:underline">
              <Button variant="outline">Stratégie</Button>
            </Link>
            <Link href="/modules/contenu-engagement" className="hover:underline">
              <Button variant="outline">Contenu</Button>
            </Link>
            <Link href="/modules/outils-pratiques" className="hover:underline">
              <Button variant="outline">Outils</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}