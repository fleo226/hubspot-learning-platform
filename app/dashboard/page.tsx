import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, BookOpen, GraduationCap, Code, CheckCircle2, Heart, MessageCircle, Zap } from "lucide-react"

export default function Dashboard() {
  // In a real app, this data would come from Zustand or a backend
  const userStats = {
    completedLessons: 12,
    totalLessons: 48,
    completionRate: 25,
    streak: 5,
    favoriteModules: 2,
    notesTaken: 8,
  }

  return (
    <div className="space-y-12">
      {/* Stats Overview */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-navy">Leçons terminées</h3>
              </div>
              <Badge variant="outline">En cours</Badge>
            </div>
            <p className="text-3xl font-bold text-navy">
              {userStats.completedLessons}/{userStats.totalLessons}
            </p>
            <p className="text-slate-600">
              {userStats.completionRate}% de complétion
            </p>
          </div>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-navy">Série en cours</h3>
              </div>
              <Badge variant="outline">Actif</Badge>
            </div>
            <p className="text-4xl font-bold text-navy">
              {userStats.streak} jours
            </p>
            <p className="text-slate-600">Sans interruption</p>
          </div>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-red-500" />
                <h3 className="font-semibold text-navy">Modules favoris</h3>
              </div>
              <Badge variant="outline">Sauvegardés</Badge>
            </div>
            <p className="text-3xl font-bold text-navy">
              {userStats.favoriteModules}
            </p>
            <p className="text-slate-600">Sur 4 parcours</p>
          </div>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold text-navy">Notes prises</h3>
              </div>
              <Badge variant="outline">Révisables</Badge>
            </div>
            <p className="text-3xl font-bold text-navy">
              {userStats.notesTaken}
            </p>
            <p className="text-slate-600">Dans tous les modules</p>
          </div>
        </Card>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Activité récente
          </h2>
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0">
                  <div className="bg-green-500/10 text-green-500 w-10 h-10 rounded flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy mb-2">
                    Leçon terminée : IA générative vs IA prédictive
                  </h3>
                  <p className="text-slate-600 mb-2">
                    Vous avez marqué cette leçon comme terminée hier à 14:30
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span>+10 XP</span>
                    <Heart className="h-4 w-4" />
                    <span>Ajouté aux favoris</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500/10 text-blue-500 w-10 h-10 rounded flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy mb-2">
                    Nouvelle note ajoutée : Prompt engineering pour les réseaux sociaux
                  </h3>
                  <p className="text-slate-600 mb-2">
                    Dans la leçon : Contenu IA éthique et efficace
                  </p>
                  <p className="text-slate-500 text-sm">
                    Il y a 2 heures
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Prêt à continuer votre parcours ?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Reprenez là où vous vous êtes arrêté ou explorez un nouveau module.
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