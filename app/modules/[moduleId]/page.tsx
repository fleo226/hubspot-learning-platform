"use client"

import { modules } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Clock, CheckCircle, ArrowRight, Play, Target, TrendingUp, BookOpen } from "lucide-react"

const lessonImages = {
  "ia-fundamentals": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
  "ia-tools": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
  "ia-content": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80",
  "ia-measure": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  "marketing-plan": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  "revops": "https://images.unsplash.com/photo-1559136555-9303baea1ebd?w=600&q=80",
  "customer-success": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "short-form": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  "representation": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "digital-course": "https://images.unsplash.com/photo-1501504905252-473c87e0a75b?w=600&q=80",
  "ai-search-grader": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
  "make-my-persona": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  "content-inventory": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
}

const lessonOutcomes = {
  "ia-fundamentals": ["Différencier IA générative vs prédictive", "Identifier cas d'usage marketing", "Éviter les pièges courants"],
  "ia-tools": ["Auditer votre stack actuelle", "Sélectionner outils adaptés", "Calculer ROI potentiel"],
  "ia-content": ["Maîtriser prompt engineering", "Détecter contenu IA", "Créer workflows éthiques"],
  "ia-measure": ["Définir KPIs pertinents", "Boucles feedback IA-humain", "Optimiser en continu"],
  "marketing-plan": ["Structure plan en 6 étapes", "Templates prêts à l'emploi", "Alignement objectifs business"],
  "revops": ["Différencier RevOps/Sales Ops", "Aligner marketing-ventes", "Maximiser revenue"],
  "customer-success": ["Stratégie digital CS", "Métriques santé client", "Réduction churn"],
  "short-form": ["Psychologie attention", "Formats performants", "Calendrier éditorial"],
  "representation": ["Marketing inclusif authentique", "Éviter tokenisme", "Résonner toutes audiences"],
  "digital-course": ["Pièges créateurs cours", "Structure pédagogique", "Modèle business viable"],
  "ai-search-grader": ["Audit visibilité IA", "Interpréter scores", "Plan d'action priorisé"],
  "make-my-persona": ["Workflow création personas", "Questions clés", "Validation données"],
  "content-inventory": ["Audit complet site", "Playbook HubSpot", "Plan optimisation"],
}

type ModuleId = "ia-marketing" | "strategie-croissance" | "contenu-engagement" | "outils-pratiques"

interface ModuleColorConfig {
  from: string
  to: string
  bg: string
  text: string
  iconBg: string
}

const moduleColors: Record<ModuleId, ModuleColorConfig> = {
  "ia-marketing": { from: "from-blue-500", to: "to-blue-600", bg: "bg-blue-500/10", text: "text-blue-600", iconBg: "bg-blue-500" },
  "strategie-croissance": { from: "from-emerald-500", to: "to-emerald-600", bg: "bg-emerald-500/10", text: "text-emerald-600", iconBg: "bg-emerald-500" },
  "contenu-engagement": { from: "from-violet-500", to: "to-violet-600", bg: "bg-violet-500/10", text: "text-violet-600", iconBg: "bg-violet-500" },
  "outils-pratiques": { from: "from-amber-500", to: "to-amber-600", bg: "bg-amber-500/10", text: "text-amber-600", iconBg: "bg-amber-500" },
}

const moduleImages: Record<ModuleId, string> = {
  "ia-marketing": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "strategie-croissance": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "contenu-engagement": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  "outils-pratiques": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
}

const otherModuleColors: Record<ModuleId, string> = {
  "ia-marketing": "bg-blue-500",
  "strategie-croissance": "bg-emerald-500",
  "contenu-engagement": "bg-violet-500",
  "outils-pratiques": "bg-amber-500",
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>
}) {
  const { moduleId } = await params
  const module = modules.find((m) => m.id === moduleId)
  const typedModuleId = moduleId as ModuleId
  
  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Module non trouvé</h1>
          <Link href="/" className="text-blue-600 hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  const colors = moduleColors[typedModuleId] || moduleColors["ia-marketing"]
  const heroImage = moduleImages[typedModuleId] || moduleImages["ia-marketing"]

  const totalTime = module.lessons.reduce((acc, l) => {
    const mins = parseInt(l.estimatedTime)
    return acc + (isNaN(mins) ? 0 : mins)
  }, 0)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={module.title} 
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-white/70 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/modules/ia-marketing" className="hover:text-white transition-colors">Parcours</Link>
              <span>/</span>
              <span className="text-white font-medium">{module.title}</span>
            </motion.div>

            {/* Icon & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white" style={{ background: colors.from + " " + colors.to }}>
                <module.icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {module.title}
                </h1>
              </div>
            </motion.div>

            {/* Description & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/80 mb-8"
            >
              <p className="text-lg max-w-xl leading-relaxed">{module.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{module.lessons.length} leçons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{totalTime} min total</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>Niveau intermédiaire</span>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={"/modules/" + moduleId + "/lessons/" + module.lessons[0].id}>
                <Button className="btn-primary bg-white text-navy hover:bg-slate-100 text-lg px-8 py-3 group">
                  <Play className="w-5 h-5 mr-2" />
                  Commencer la première leçon
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                Voir le programme complet
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lessons Section */}
      <section className="py-16 lg:py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-navy mb-4">
              Programme détaillé
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Chaque leçon combine théorie experte, exemples concrets et actions immédiates.
            </p>
          </motion.div>

          <div className="space-y-6">
            {module.lessons.map((lesson, index) => {
              const image = lessonImages[lesson.id as keyof typeof lessonImages] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              const outcomes = lessonOutcomes[lesson.id as keyof typeof lessonOutcomes] || ["Compétence clé 1", "Compétence clé 2", "Compétence clé 3"]
              
              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link 
                    href={"/modules/" + moduleId + "/lessons/" + lesson.id}
                    className="block group"
                  >
                    <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group-hover:border-r-4 group-hover:border-blue-500">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Sidebar */}
                        <div className="relative md:w-48 flex-shrink-0">
                          <div className="absolute inset-0">
                            <img
                              src={image}
                              alt={lesson.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
                          </div>
                          <div className="absolute inset-0 p-4 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white/90 px-2 py-1 rounded bg-white/10 backdrop-blur">
                                Leçon {index + 1}
                              </span>
                              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <Play className="w-6 h-6 text-white ml-1" />
                              </div>
                            </div>
                            <div className="flex items-end gap-2">
                              <Clock className="w-4 h-4 text-white/80" />
                              <span className="text-white text-sm font-medium">{lesson.estimatedTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-600 transition-colors">
                                {lesson.title}
                              </h3>
                              <p className="text-slate-600 leading-relaxed">{lesson.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white"
                            >
                              <ArrowRight className="w-6 h-6" />
                            </motion.div>
                          </div>

                          {/* Learning Outcomes */}
                          <div className="pt-4 border-t border-slate-100">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                              Ce que vous allez maîtriser
                            </p>
                            <div className="grid gap-2 sm:grid-cols-3">
                              {outcomes.map((outcome, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.1 * i }}
                                  className="flex items-center gap-2 text-sm text-slate-600"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span>{outcome}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation to other modules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-slate-200"
          >
            <h3 className="text-lg font-semibold text-navy mb-6 text-center">Continuer avec un autre parcours</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {modules.filter(m => m.id !== moduleId).map((otherModule) => {
                const otherTypedId = otherModule.id as ModuleId
                const otherColor = otherModuleColors[otherTypedId] || "bg-blue-500"
                const href = "/modules/" + otherModule.id
                const iconClassName = "w-14 h-14 rounded-xl " + otherColor + " flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform"
                return (
                  <Link
                    key={otherModule.id}
                    href={href}
                    className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className={iconClassName}>
                      <otherModule.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-navy mb-2 group-hover:text-blue-600 transition-colors">
                      {otherModule.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">{otherModule.description}</p>
                    <span className="text-xs font-medium text-blue-600">
                      {otherModule.lessons.length} leçons · Commencer
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}