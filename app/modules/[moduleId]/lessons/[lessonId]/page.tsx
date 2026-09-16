"use client"

import { modules } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ArrowLeft, ArrowRight, CheckCircle, BookOpen, ExternalLink, Share2, Bookmark, MessageSquare, Lightbulb, Target, FileText, PlayCircle, PauseCircle } from "lucide-react"
import { useState } from "react"

const lessonImages: Record<string, string> = {
  "ia-fundamentals": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  "ia-tools": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
  "ia-content": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80",
  "ia-measure": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "marketing-plan": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  "revops": "https://images.unsplash.com/photo-1559136555-9303baea1ebd?w=1200&q=80",
  "customer-success": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  "short-form": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
  "representation": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  "digital-course": "https://images.unsplash.com/photo-1501504905252-473c87e0a75b?w=1200&q=80",
  "ai-search-grader": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80",
  "make-my-persona": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  "content-inventory": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
}

const lessonFullContent: Record<string, { 
  introduction: string
  sections: { title: string; content: string; type?: 'text' | 'list' | 'tip' | 'action' }[]
  keyTakeaways: string[]
  actionItems: string[]
  resources: { title: string; url: string; type: string }[]
}> = {
  "ia-fundamentals": {
    introduction: "L'intelligence artificielle transforme le marketing à une vitesse sans précédent. Mais toutes les IA ne se valent pas. Comprendre la différence fondamentale entre IA générative et IA prédictive est la clé pour choisir les bons outils et éviter les investissements inutiles.",
    sections: [
      { 
        title: "IA Générative : Créer du nouveau", 
        content: "L'IA générative (GPT, Midjourney, DALL-E) crée du contenu original : textes, images, code, vidéos. Elle excelle pour la création de contenu, l'idéation, la rédaction de premiers jets, et la personnalisation à grande échelle.", 
        type: "text" 
      },
      { 
        title: "IA Prédictive : Anticiper l'avenir", 
        content: "L'IA prédictive analyse vos données historiques pour prévoir les comportements futurs : scoring leads, churn prediction, lifetime value, optimisation budgétaire. Elle excelle pour la prise de décision stratégique et l'allocation de ressources.", 
        type: "text" 
      },
      { 
        title: "Quand utiliser laquelle ?", 
        content: "Générative = Créer, rédiger, designer, coder. Prédictive = Prédire, segmenter, optimiser, allouer. Les meilleurs marketers combinent les deux : l'IA prédictive identifie les opportunités, l'IA générative exécute à grande échelle.", 
        type: "tip" 
      },
      { 
        title: "Pièges à éviter", 
        content: "Ne pas confondre les deux types. Ne pas utiliser de l'IA générative pour de la prédiction (hallucinations). Ne pas attendre de l'IA prédictive qu'elle crée du contenu créatif. Valider toujours les sorties par un expert humain.", 
        type: "action" 
      },
    ],
    keyTakeaways: [
      "L'IA générative crée, l'IA prédictive anticipe — des cas d'usage radicalement différents",
      "Combiner les deux = avantage concurrentiel maximal",
      "Toujours valider les sorties IA par expertise humaine",
      "Commencer petit : un cas d'usage génératif, un cas d'usage prédictif"
    ],
    actionItems: [
      "Auditer vos outils actuels : les classer génératif vs prédictif",
      "Identifier 1 tâche répétitive à automatiser avec IA générative",
      "Identifier 1 décision stratégique à améliorer avec IA prédictive",
      "Tester 2 outils gratuits cette semaine (ex: ChatGPT + Google Analytics Intelligence)"
    ],
    resources: [
      { title: "Article HubSpot original", url: "https://blog.hubspot.com/marketing/future-of-marketing-ai", type: "Article" },
      { title: "Guide IA générative vs prédictive", url: "https://blog.hubspot.com/marketing/generative-vs-predictive-ai", type: "Guide" },
      { title: "Template audit outils IA", url: "https://blog.hubspot.com/marketing/ai-tools-audit-template", type: "Template" },
    ]
  },
  "ia-tools": {
    introduction: "Le paysage des outils IA explose : plus de 10 000 outils référencés. Comment faire le tri ? Ce guide vous donne une méthode structurée pour auditer votre stack, identifier les gaps, et sélectionner les outils qui apportent un ROI mesurable.",
    sections: [
      { 
        title: "Catégoriser vos besoins", 
        content: "Avant d'acheter, listez vos cas d'usage par catégorie : Création contenu (rédaction, visuel, vidéo), Analyse données (prédictif, reporting), Automatisation (workflows, chatbots), Personnalisation (recommandations, emailing).", 
        type: "text" 
      },
      { 
        title: "Grille d'évaluation 4 critères", 
        content: "1) Intégration : Se connecte-t-il à votre stack (CRM, CMS, Analytics) ? 2) Courbe apprentissage : Votre équipe peut-elle l'adopter en < 2 semaines ? 3) ROI mesurable : KPIs clairs avant achat. 4) Sécurité : Conformité RGPD, données propriétaires.", 
        type: "list" 
      },
      { 
        title: "Top outils gratuits/freemium 2024", 
        content: "Rédaction : ChatGPT, Claude, Notion AI. Visuel : Canva AI, Adobe Firefly. Vidéo : CapCut, Runway. Analyse : GA4 Intelligence, HubSpot AI. Audio : ElevenLabs, Descript. Code : GitHub Copilot, Cursor.", 
        type: "list" 
      },
      { 
        title: "Construire votre stack minimale viable", 
        content: "Ne prenez pas 20 outils. Commencez par 3-4 : 1 LLM généraliste (ChatGPT/Claude), 1 spécialisé contenu (Jasper/Copy.ai), 1 analyse (votre CRM + IA), 1 automatisation (Zapier/Make + IA). Mesurez 30 jours avant d'ajouter.", 
        type: "action" 
      },
    ],
    keyTakeaways: [
      "Moins d'outils, mieux intégrés > beaucoup d'outils isolés",
      "Toujours définir KPIs AVANT d'acheter",
      "Privilégier outils avec intégrations natives à votre stack",
      "Former l'équipe sur 1 outil à la fois"
    ],
    actionItems: [
      "Lister vos 5 problèmes marketing prioritaires",
      "Mapper chaque problème à une catégorie d'outil IA",
      "Tester 3 outils gratuits sur 1 cas d'usage réel",
      "Mesurer gain de temps/qualité sur 2 semaines"
    ],
    resources: [
      { title: "Article HubSpot : Meilleurs outils IA recherche", url: "https://blog.hubspot.com/marketing/best-ai-search-tools", type: "Article" },
      { title: "Répertoire outils IA marketing", url: "https://blog.hubspot.com/marketing/ai-marketing-tools-directory", type: "Répertoire" },
      { title: "Calculateur ROI outils IA", url: "https://blog.hubspot.com/marketing/ai-tools-roi-calculator", type: "Calculateur" },
    ]
  },
  "ia-content": {
    introduction: "Le prompt engineering n'est pas de la magie — c'est une compétence technique. Apprenez à structurer vos prompts pour obtenir des résultats reproductibles, détectez le contenu IA pour garder l'authenticité, et construisez des workflows éthiques qui respectent votre audience.",
    sections: [
      { 
        title: "Framework C.R.E.A.T.E. pour prompts parfaits", 
        content: "Context (contexte business), Role (rôle de l'IA), Examples (exemples few-shot), Audience (cible), Tone (ton/voice), Evaluation (critères validation). Un prompt complet = résultat utilisable du premier coup.", 
        type: "text" 
      },
      { 
        title: "Détecter le contenu IA : signaux rouges", 
        content: "Vocabulaire trop générique ('déverrouiller', 'élever', 'paysage'), structure trop parfaite, absence d'opinions tranchées, exemples vagues, transitions artificielles. Outils : GPTZero, Originality.ai, Copyleaks — mais l'œil humain reste meilleur.", 
        type: "list" 
      },
      { 
        title: "Workflow éthique : Humain + IA", 
        content: "1) Humain définit stratégie/angle. 2) IA génère options/variations. 3) Humain sélectionne, édite, valide. 4) IA optimise (SEO, lisibilité). 5) Humain approuve final. Jamais IA seule en publication.", 
        type: "action" 
      },
      { 
        title: "Templates prompts marketing prêts à l'emploi", 
        content: "Articles blog SEO, séquences email nurturing, posts LinkedIn thought leadership, scripts vidéo courte, descriptions produits, FAQ clients, landing pages. Chaque template suit C.R.E.A.T.E. et inclut variables personnalisables.", 
        type: "tip" 
      },
    ],
    keyTakeaways: [
      "Prompt engineering = compétence technique, pas talent inné",
      "Framework C.R.E.A.T.E. = résultats reproductibles",
      "Workflow Humain→IA→Humain = qualité + éthique",
      "Détecter contenu IA = protéger authenticité marque"
    ],
    actionItems: [
      "Appliquer C.R.E.A.T.E. à votre prochain prompt",
      "Tester 3 outils détection sur vos contenus récents",
      "Créer 1 template prompt pour votre format récurrent",
      "Établir charte éthique IA pour votre équipe"
    ],
    resources: [
      { title: "Article HubSpot : Types contenu IA marketing", url: "https://blog.hubspot.com/marketing/top-types-of-ai-generated-content-in-marketing", type: "Article" },
      { title: "Bibliothèque prompts marketing", url: "https://blog.hubspot.com/marketing/ai-prompt-library-marketing", type: "Bibliothèque" },
      { title: "Checklist éthique contenu IA", url: "https://blog.hubspot.com/marketing/ai-content-ethics-checklist", type: "Checklist" },
    ]
  },
  "ia-measure": {
    introduction: "L'IA génère des données massives. Mais quelles métriques comptent vraiment ? Au-delà du CTR et des vanity metrics, découvrez comment construire des boucles de feedback IA-humain qui améliorent continuellement vos résultats marketing.",
    sections: [
      { 
        title: "Métriques qui comptent vs vanity metrics", 
        content: "Vanity : impressions, likes, CTR brut. Business : CAC, LTV, revenue attributed, pipeline velocity, conversion rate par canal. IA : quality score outputs, human edit rate, time saved, cost per output vs human.", 
        type: "list" 
      },
      { 
        title: "Boucle feedback IA-Humain en 4 étapes", 
        content: "1) IA propose → 2) Humain valide/modifie → 3) Différence capturée → 4) Modèle affiné (prompt ou fine-tuning). Chaque cycle améliore la pertinence. Objectif : réduire edit rate < 20% en 30 jours.", 
        type: "action" 
      },
      { 
        title: "Dashboard IA marketing essentiel", 
        content: "KPIs principaux : Taux adoption équipe, Temps économisé/semaine, Coût par asset vs avant, Qualité score (humain), Revenue influenced. KPIs avancés : Prompt performance ranking, Model drift detection, Human-in-loop ratio.", 
        type: "text" 
      },
      { 
        title: "Calculer le vrai ROI de l'IA", 
        content: "(Valeur outputs IA - Coût outils - Temps humain supervision) / Coût total. Inclure : gains directs (revenus), gains indirects (vitesse, qualité), coûts cachés (formation, intégration, révision). Benchmark : 3-5x ROI à 6 mois pour adoption réussie.", 
        type: "tip" 
      },
    ],
    keyTakeaways: [
      "Mesurer l'IA = mesurer l'impact business, pas l'usage outil",
      "Boucle feedback = amélioration continue automatique",
      "Edit rate < 20% = maturité prompt engineering",
      "ROI 3-5x à 6 mois = adoption réussie"
    ],
    actionItems: [
      "Définir 3 KPIs business pour votre usage IA",
      "Mettre en place boucle feedback sur 1 workflow",
      "Tracker edit rate pendant 2 semaines",
      "Calculer ROI prévisionnel avant prochain achat outil"
    ],
    resources: [
      { title: "Article HubSpot : Coût AEO", url: "https://blog.hubspot.com/marketing/how-much-does-aeo-cost", type: "Article" },
      { title: "Template dashboard IA marketing", url: "https://blog.hubspot.com/marketing/ai-marketing-dashboard-template", type: "Template" },
      { title: "Guide mesure ROI IA", url: "https://blog.hubspot.com/marketing/measuring-ai-marketing-roi", type: "Guide" },
    ]
  },
  // Add more lesson content as needed - using a default for others
}

const defaultContent = {
  introduction: "Cette leçon approfondit un aspect clé du marketing moderne basé sur l'expertise HubSpot. Le contenu complet est disponible via l'article original.",
  sections: [
    { title: "Concepts fondamentaux", content: "Les principes de base expliqués dans l'article HubSpot de référence.", type: "text" },
    { title: "Application pratique", content: "Comment appliquer ces concepts dans votre contexte marketing quotidien.", type: "action" },
    { title: "Erreurs à éviter", content: "Les pièges courants identifiés par les experts HubSpot.", type: "tip" },
  ],
  keyTakeaways: ["Point clé 1 basé sur l'article HubSpot", "Point clé 2 actionnable immédiatement", "Point clé 3 pour aller plus loin"],
  actionItems: ["Action 1 : Appliquer aujourd'hui", "Action 2 : Tester cette semaine", "Action 3 : Mesurer dans 30 jours"],
  resources: [{ title: "Article HubSpot complet", url: "#", type: "Article" }]
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; lessonId: string }>
}) {
  const { moduleId, lessonId } = await params
  const module = modules.find((m) => m.id === moduleId)
  
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

  const lesson = module.lessons.find((l) => l.id === lessonId)
  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Leçon non trouvée</h1>
          <Link href={`/modules/${moduleId}`} className="text-blue-600 hover:underline">Retour au module</Link>
        </div>
      </div>
    )
  }

  const currentIndex = module.lessons.findIndex((l) => l.id === lessonId)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < module.lessons.length - 1
  const previousLesson = hasPrevious ? module.lessons[currentIndex - 1] : null
  const nextLesson = hasNext ? module.lessons[currentIndex + 1] : null

  const content = lessonFullContent[lessonId] || defaultContent
  const heroImage = lessonImages[lessonId] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  const moduleColors: Record<string, { from: string; to: string; bg: string; text: string }> = {
    "ia-marketing": { from: "from-blue-500", to: "to-blue-600", bg: "bg-blue-500/10", text: "text-blue-600" },
    "strategie-croissance": { from: "from-emerald-500", to: "to-emerald-600", bg: "bg-emerald-500/10", text: "text-emerald-600" },
    "contenu-engagement": { from: "from-violet-500", to: "to-violet-600", bg: "bg-violet-500/10", text: "text-violet-600" },
    "outils-pratiques": { from: "from-amber-500", to: "to-amber-600", bg: "bg-amber-500/10", text: "text-amber-600" },
  }
  const colors = moduleColors[moduleId] || moduleColors["ia-marketing"]

  const [completed, setCompleted] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={lesson.title} 
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href={`/modules/${moduleId}`} className="hover:text-white transition-colors">{module.title}</Link>
              <span>/</span>
              <span className="text-white font-medium">Leçon {currentIndex + 1}</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center ${colors.from} ${colors.to} text-white flex-shrink-0`}>
                <module.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <Badge className={`${colors.bg} ${colors.text} text-xs font-medium mb-3`}>
                  {module.lessons.length} leçons au total
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                  {lesson.title}
                </h1>
                <p className="text-white/80 text-lg max-w-2xl">{lesson.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
                <Clock className="w-4 h-4" />
                <span>{lesson.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
                <BookOpen className="w-4 h-4" />
                <span>Leçon {currentIndex + 1} sur {module.lessons.length}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-xl">
                <Target className="w-4 h-4" />
                <span>Niveau intermédiaire</span>
              </div>
            </div>
          </motion.div>

          {/* Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="btn-primary bg-white text-navy hover:bg-slate-100 px-6 py-3 group" asChild>
              <Link href={lesson.articleUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Lire l'article complet HubSpot
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 border-white/30 text-white hover:bg-white/10" 
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark className={`w-5 h-5 mr-2 ${bookmarked ? 'fill-current' : ''}`} />
              {bookmarked ? 'Retiré des favoris' : 'Ajouter aux favoris'}
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 border-white/30 text-white hover:bg-white/10" 
              onClick={() => setCompleted(!completed)}
            >
              <CheckCircle className={`w-5 h-5 mr-2 ${completed ? 'fill-current text-green-400' : ''}`} />
              {completed ? 'Marqué comme terminé' : 'Marquer terminé'}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Progress & Navigation */}
            <div className="lg:col-span-1 space-y-6">
              {/* Progress Card */}
              <Card className="sticky top-24 border-0 shadow-lg">
                <div className="p-6">
                  <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Votre progression
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600">Progression leçon</span>
                        <span className="font-semibold text-navy">{completed ? '100%' : '0%'}</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: completed ? '100%' : '0%' }}
                          transition={{ duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${completed ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                        {completed ? <CheckCircle className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="font-medium text-navy text-sm">{completed ? 'Leçon terminée !' : 'En cours'}</p>
                        <p className="text-xs text-slate-500">{completed ? 'Bravo ! Passez à la suivante.' : 'Continuez votre lecture'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Module Navigation */}
              <Card className="border-0 shadow-lg">
                <div className="p-6">
                  <h3 className="font-semibold text-navy mb-4">Sommaire du module</h3>
                  <nav className="space-y-2">
                    {module.lessons.map((l, i) => (
                      <Link
                        key={l.id}
                        href={`/modules/${moduleId}/lessons/${l.id}`}
                        className={`block p-3 rounded-lg transition-all ${
                          i === currentIndex 
                            ? 'bg-blue-50 border-l-4 border-blue-500 text-navy' 
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            i === currentIndex ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'
                          }`}>
                            {i + 1}
                          </span>
                          <span className="text-sm font-medium truncate">{l.title}</span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </Card>

              {/* Key Takeaways Preview */}
              <Card className="border-0 shadow-lg">
                <div className="p-6">
                  <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Points clés
                  </h3>
                  <ul className="space-y-3">
                    {content.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-slate max-w-none"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                    <p className="text-lg text-slate-600 mb-6 border-l-4 border-blue-500 pl-4 italic">
                      {content.introduction}
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Content Sections */}
              <AnimatePresence mode="wait">
                {content.sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <Card className="border-0 shadow-lg overflow-hidden">
                      <div className="p-6 lg:p-8">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 ${colors.from} ${colors.to} text-white`}>
                            {section.type === 'tip' && <Lightbulb className="w-6 h-6" />}
                            {section.type === 'action' && <Target className="w-6 h-6" />}
                            {section.type === 'list' && <FileText className="w-6 h-6" />}
                            {section.type === 'text' && <BookOpen className="w-6 h-6" />}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-navy mb-3">{section.title}</h3>
                            <div className="prose prose-slate max-w-none text-slate-600">
                              {section.type === 'list' ? (
                                <ul className="space-y-2 list-disc list-inside">
                                  {section.content.split('. ').filter(Boolean).map((item, i) => (
                                    <li key={i} className="leading-relaxed">{item.trim()}.</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="leading-relaxed">{section.content}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Key Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy">Points clés à retenir</h3>
                    </div>
                    <ul className="space-y-3">
                      {content.keyTakeaways.map((takeaway, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="leading-relaxed">{takeaway}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Action Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy">Plan d'action immédiat</h3>
                    </div>
                    <ol className="space-y-3">
                      {content.actionItems.map((action, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-white font-bold text-sm">
                            {i + 1}
                          </div>
                          <span className="leading-relaxed font-medium">{action}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </Card>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy">Ressources complémentaires</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {content.resources.map((resource, i) => (
                        <Link
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-colors">
                            <ExternalLink className="w-5 h-5 text-violet-600 group-hover:text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-navy truncate group-hover:text-blue-600 transition-colors">{resource.title}</p>
                            <p className="text-xs text-slate-500 capitalize">{resource.type}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Between Lessons */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
            {hasPrevious && previousLesson && (
              <Link
                href={`/modules/${moduleId}/lessons/${previousLesson.id}`}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all w-full lg:w-[48%]"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-200 group-hover:bg-blue-500 group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                  <ArrowLeft className="w-6 h-6 text-slate-500 group-hover:text-white" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Leçon précédente</p>
                  <p className="font-semibold text-navy truncate group-hover:text-blue-600 transition-colors">{previousLesson.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{previousLesson.estimatedTime}</p>
                </div>
              </Link>
            )}

            {hasNext && nextLesson && (
              <Link
                href={`/modules/${moduleId}/lessons/${nextLesson.id}`}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all w-full lg:w-[48%]"
              >
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-xs font-medium text-blue-100 uppercase tracking-wider mb-1">Leçon suivante</p>
                  <p className="font-semibold truncate">{nextLesson.title}</p>
                  <p className="text-sm text-blue-100 mt-1">{nextLesson.estimatedTime}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            )}

            {!hasNext && (
              <Link
                href={`/modules/${moduleId}`}
                className="group flex items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all w-full lg:w-[48%] mx-auto lg:mx-0"
              >
                <div className="text-center">
                  <p className="text-xs font-medium text-blue-100 uppercase tracking-wider mb-1">Module terminé !</p>
                  <p className="font-semibold">Voir le résumé du parcours</p>
                </div>
                <CheckCircle className="w-6 h-6" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}