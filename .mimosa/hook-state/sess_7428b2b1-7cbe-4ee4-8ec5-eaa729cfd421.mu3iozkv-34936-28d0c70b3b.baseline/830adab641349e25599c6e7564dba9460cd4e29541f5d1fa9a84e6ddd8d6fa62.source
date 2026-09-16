export type Module = {
  id: string
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string // tailwind color class
  lessons: Lesson[]
}

export type Lesson = {
  id: string
  title: string
  description: string
  articleUrl: string
  estimatedTime: string // e.g., "15 min"
  completed?: boolean
}

// Import icons from lucide-react
import { TrendingUp, BookOpen, GraduationCap, ShieldCheck, Code, Zap } from "lucide-react"

export const modules: Module[] = [
  {
    id: "ia-marketing",
    title: "IA pour Marketers Opérationnels",
    description: "Maîtrisez les outils et stratégies d'IA pour optimiser vos campagnes marketing",
    icon: TrendingUp,
    color: "bg-blue-500",
    lessons: [
      {
        id: "ia-fundamentals",
        title: "Fondamentaux de l'IA marketing",
        description: "IA générative vs IA prédictive : comprendre la différence critique",
        articleUrl: "/blog/the-future-of-marketing-isnt-humans-vs-ai-its-humans-with-ai",
        estimatedTime: "20 min",
      },
      {
        id: "ia-tools",
        title: "Construire votre stack d'outils IA",
        description: "Audit gratuit des meilleurs outils IA pour le marketing",
        articleUrl: "/blog/best-ai-search-tools",
        estimatedTime: "25 min",
      },
      {
        id: "ia-content",
        title: "Contenu IA éthique et efficace",
        description: "Prompt engineering pour marketing et détection du contenu IA par les audiences",
        articleUrl: "/blog/top-types-of-ai-generated-content-in-marketing",
        estimatedTime: "30 min",
      },
      {
        id: "ia-measure",
        title: "Mesure et optimisation IA",
        description: "Métriques qui comptent au-delà du CTR et boucles de feedback IA-humain",
        articleUrl: "/blog/how-much-does-aeo-cost",
        estimatedTime: "20 min",
      },
    ],
  },
  {
    id: "strategie-croissance",
    title: "Stratégie et Croissance Mesurable",
    description: "Frameworks éprouvés pour développer votre activité marketing",
    icon: BookOpen,
    color: "bg-green-500",
    lessons: [
      {
        id: "marketing-plan",
        title: "Plan marketing exceptionnel",
        description: "6 étapes pour créer un plan marketing outstanding avec templates gratuits",
        articleUrl: "/blog/6-steps-to-create-an-outstanding-marketing-plan-free-templates",
        estimatedTime: "30 min",
      },
      {
        id: "revops",
        title: "RevOps vs Sales Ops",
        description: "Comprendre la différence et aligner vos équipes pour maximiser les revenus",
        articleUrl: "/blog/revops-vs-sales-ops",
        estimatedTime: "20 min",
      },
      {
        id: "customer-success",
        title: "Digital Customer Success",
        description: "Créer une stratégie gagnante de succès client digital",
        articleUrl: "/blog/digital-customer-success-how-to-create-a-winning-strategy",
        estimatedTime: "25 min",
      },
    ],
  },
  {
    id: "contenu-engagement",
    title: "Contenu et Engagement",
    description: "Créer du contenu qui convertit et fidélise votre audience",
    icon: GraduationCap,
    color: "bg-purple-500",
    lessons: [
      {
        id: "short-form",
        title: "Psychologie du contenu court",
        description: "Pourquoi nous aimons le contenu bite-sized et comment l'exploiter",
        articleUrl: "/blog/the-psychology-of-short-form-content-why-we-love-bite-sized",
        estimatedTime: "15 min",
      },
      {
        id: "representation",
        title: "Représentation dans le marketing",
        description: "Faire du marketing inclusif qui résonne avec toutes les audiences",
        articleUrl: "/blog/how-to-do-representation-in-marketing-the-right-way-consu",
        estimatedTime: "20 min",
      },
      {
        id: "digital-course",
        title: "Éviter les pièges des cours digitaux",
        description: "Apprendre des erreurs des créateurs de cours expérimentés",
        articleUrl: "/blog/learn-from-my-mistakes-7-digital-course-pitfalls-to-skip",
        estimatedTime: "25 min",
      },
    ],
  },
  {
    id: "outils-pratiques",
    title: "Boîte à outils pratiques",
    description: "Utiliser les outils gratuits HubSpot pour améliorer votre productivité",
    icon: Code,
    color: "bg-orange-500",
    lessons: [
      {
        id: "ai-search-grader",
        title: "AI Search Grader",
        description: "Audit de votre visibilité dans les réponses IA avec interprétation des scores",
        articleUrl: "/tools/ai-search-grader",
        estimatedTime: "10 min",
      },
      {
        id: "make-my-persona",
        title: "Make My Persona",
        description: "Workflow complet avec questions clés pour créer vos personas marketing",
        articleUrl: "/tools/make-my-persona",
        estimatedTime: "15 min",
      },
      {
        id: "content-inventory",
        title: "Content Inventory",
        description: "Audit complet de votre site web avec le playbook HubSpot",
        articleUrl: "/tools/content-inventory",
        estimatedTime: "20 min",
      },
    ],
  },
]