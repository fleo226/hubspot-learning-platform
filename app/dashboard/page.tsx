"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { 
  TrendingUp, BookOpen, GraduationCap, Code, CheckCircle2, Heart, MessageCircle, Zap, 
  ArrowRight, Target, Award, Flame, Calendar, BarChart3, Clock, Bookmark, 
  ChevronRight, PieChart, Activity, Trophy, Star, PlayCircle, Lock
} from "lucide-react"
import { modules } from "@/lib/data"
import { useState } from "react"

type TabKey = 'overview' | 'progress' | 'achievements'

const tabsConfig = [
  { key: 'overview' as TabKey, label: 'Vue d\'ensemble', icon: BarChart3 },
  { key: 'progress' as TabKey, label: 'Mes parcours', icon: PieChart },
  { key: 'achievements' as TabKey, label: 'Récompenses', icon: Trophy },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const statCards = [
  { 
    key: 'completed', 
    icon: CheckCircle2, 
    color: 'text-green-500', 
    bg: 'bg-green-500/10', 
    title: 'Leçons terminées', 
    value: '12/48', 
    sub: '25% complétion',
    trend: '+3 cette semaine',
    trendColor: 'text-green-600'
  },
  { 
    key: 'streak', 
    icon: Flame, 
    color: 'text-orange-500', 
    bg: 'bg-orange-500/10', 
    title: 'Série actuelle', 
    value: '7 jours', 
    sub: 'Record: 14 jours',
    trend: 'Continuez !',
    trendColor: 'text-orange-600'
  },
  { 
    key: 'favorites', 
    icon: Heart, 
    color: 'text-red-500', 
    bg: 'bg-red-500/10', 
    title: 'Favoris', 
    value: '8', 
    sub: 'Leçons sauvegardées',
    trend: '2 cette semaine',
    trendColor: 'text-red-600'
  },
  { 
    key: 'time', 
    icon: Clock, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10', 
    title: 'Temps d\'apprentissage', 
    value: '6h 42m', 
    sub: 'Ce mois-ci',
    trend: '+45% vs mois dernier',
    trendColor: 'text-blue-600'
  },
]

const moduleProgress = [
  { 
    id: 'ia-marketing', 
    title: 'IA pour Marketers', 
    icon: TrendingUp, 
    color: 'from-blue-500 to-blue-600',
    progress: 75,
    completed: 3,
    total: 4,
    nextLesson: 'Mesure et optimisation IA',
    status: 'En cours'
  },
  { 
    id: 'strategie-croissance', 
    title: 'Stratégie & Croissance', 
    icon: BookOpen, 
    color: 'from-emerald-500 to-emerald-600',
    progress: 33,
    completed: 1,
    total: 3,
    nextLesson: 'RevOps vs Sales Ops',
    status: 'Débuté'
  },
  { 
    id: 'contenu-engagement', 
    title: 'Contenu & Engagement', 
    icon: GraduationCap, 
    color: 'from-violet-500 to-violet-600',
    progress: 0,
    completed: 0,
    total: 3,
    nextLesson: 'Psychologie du contenu court',
    status: 'Non commencé'
  },
  { 
    id: 'outils-pratiques', 
    title: 'Outils Pratiques', 
    icon: Code, 
    color: 'from-amber-500 to-amber-600',
    progress: 67,
    completed: 2,
    total: 3,
    nextLesson: 'Content Inventory',
    status: 'En cours'
  },
]

const recentActivity = [
  { 
    id: 1, 
    type: 'complete', 
    icon: CheckCircle2, 
    color: 'text-green-500', 
    bg: 'bg-green-500/10',
    title: 'Leçon terminée', 
    desc: 'IA générative vs IA prédictive : comprendre la différence critique',
    module: 'IA pour Marketers',
    time: 'Il y a 2 heures',
    xp: 15
  },
  { 
    id: 2, 
    type: 'bookmark', 
    icon: Bookmark, 
    color: 'text-yellow-500', 
    bg: 'bg-yellow-500/10',
    title: 'Ajouté aux favoris', 
    desc: 'Prompt engineering pour marketing et détection du contenu IA',
    module: 'IA pour Marketers',
    time: 'Hier, 14:30'
  },
  { 
    id: 3, 
    type: 'note', 
    icon: MessageCircle, 
    color: 'text-blue-500', 
    bg: 'bg-blue-500/10',
    title: 'Note créée', 
    desc: 'Framework C.R.E.A.T.E. pour prompts marketing efficaces',
    module: 'IA pour Marketers',
    time: 'Hier, 10:15'
  },
  { 
    id: 4, 
    type: 'complete', 
    icon: CheckCircle2, 
    color: 'text-green-500', 
    bg: 'bg-green-500/10',
    title: 'Leçon terminée', 
    desc: 'Plan marketing exceptionnel : 6 étapes avec templates gratuits',
    module: 'Stratégie & Croissance',
    time: 'Il y a 3 jours',
    xp: 20
  },
  { 
    id: 5, 
    type: 'start', 
    icon: PlayCircle, 
    color: 'text-purple-500', 
    bg: 'bg-purple-500/10',
    title: 'Nouveau module commencé', 
    desc: 'Outils Pratiques - AI Search Grader',
    module: 'Outils Pratiques',
    time: 'Il y a 4 jours'
  },
]

const achievements = [
  { icon: Trophy, title: 'Premier pas', desc: 'Première leçon terminée', unlocked: true, date: 'Aujourd\'hui' },
  { icon: Flame, title: 'Feu sacré', desc: '7 jours de série', unlocked: true, date: 'Aujourd\'hui' },
  { icon: Award, title: 'Explorer IA', desc: 'Terminer module IA Marketing', unlocked: false, progress: 75 },
  { icon: Star, title: 'Collectionneur', desc: '10 leçons en favoris', unlocked: false, progress: 80 },
  { icon: BookOpen, title: 'Stratège', desc: 'Terminer module Stratégie', unlocked: false, progress: 33 },
  { icon: Target, title: 'Expert complet', desc: 'Terminer les 4 modules', unlocked: false, progress: 25 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'achievements'>('overview')

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy to-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-navy">Tableau de bord</h1>
                <p className="text-sm text-slate-500">Suivez votre progression marketing</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-xl text-sm font-medium">
                <Flame className="w-4 h-4 animate-pulse" />
                <span>Série : 7 jours</span>
              </div>
              <Button className="btn-primary" asChild>
                <Link href="/modules/ia-marketing">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Continuer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Stats Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat, index) => (
              <motion.div
                key={stat.key}
                variants={itemVariants}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-transparent to-current opacity-10" style={{ background: 'linear-gradient(to bottom left, transparent, ' + stat.color.replace('text-', '') + ')' }} />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">KPI</Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-navy">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.sub}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className={`text-sm font-medium ${stat.trendColor}`}>{stat.trend}</span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-navy transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-slate-200 w-fit">
            {tabsConfig.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Module Progress */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">Progression par parcours</h2>
                    <p className="text-slate-600">Votre avancement dans chaque module</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {moduleProgress.map((mod, index) => (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/modules/${mod.id}`} className="group">
                        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white h-full group-hover:border-r-4 group-hover:border-blue-500">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" style={{ background: mod.color }} />
                          <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white`}>
                                <mod.icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-navy truncate group-hover:text-blue-600 transition-colors">{mod.title}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${mod.progress === 100 ? 'bg-green-100 text-green-700' : mod.progress > 0 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                                  {mod.status}
                                </span>
                              </div>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-500">Progression</span>
                                <span className="font-bold text-navy">{mod.progress}%</span>
                              </div>
                              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${mod.progress}%` }}
                                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r rounded-full" style={{ background: mod.color }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                              <span>{mod.completed}/{mod.total} leçons</span>
                              <Clock className="w-4 h-4" />
                            </div>

                            <div className="p-3 bg-slate-50 rounded-xl">
                              <p className="text-xs text-slate-500 mb-1">Prochaine leçon</p>
                              <p className="text-sm font-medium text-navy truncate group-hover:text-blue-600 transition-colors">{mod.nextLesson}</p>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Weekly Activity Chart */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">Activité hebdomadaire</h2>
                <Card className="border-0 shadow-lg">
                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-7">
                      {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, i) => {
                        const hours = [1.5, 0, 2, 1, 3, 0.5, 0][i]
                        const maxHours = 3
                        const height = (hours / maxHours) * 100
                        return (
                          <motion.div
                            key={day}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-full relative h-32">
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 rounded-t-full bg-gradient-to-t from-blue-500 to-blue-400"
                                style={{ height: `${height}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-slate-500">{day}</span>
                            <span className="text-xs text-slate-400">{hours}h</span>
                          </motion.div>
                        )
                      })}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-8 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-blue-400" />
                        <span>Temps d'apprentissage</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded bg-slate-200" />
                        <span>Aucune activité</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.section>

              {/* Quick Actions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">Actions rapides</h2>
                <div className="grid gap-4 md:grid-cols-4">
                  <Link href="/modules/ia-marketing/lessons/ia-measure" className="group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group-hover:border-r-4 group-hover:border-blue-500">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <PlayCircle className="w-7 h-7 text-blue-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-navy mb-1">Continuer la leçon</h3>
                      <p className="text-sm text-slate-500">Mesure et optimisation IA</p>
                    </Card>
                  </Link>
                  <Link href="/modules/outils-pratiques/lessons/content-inventory" className="group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group-hover:border-r-4 group-hover:border-emerald-500">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <Code className="w-7 h-7 text-emerald-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-navy mb-1">Reprendre Outils</h3>
                      <p className="text-sm text-slate-500">Content Inventory</p>
                    </Card>
                  </Link>
                  <Link href="/modules/strategie-croissance/lessons/revops" className="group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group-hover:border-r-4 group-hover:border-violet-500">
                      <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                        <BookOpen className="w-7 h-7 text-violet-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-navy mb-1">Explorer Stratégie</h3>
                      <p className="text-sm text-slate-500">RevOps vs Sales Ops</p>
                    </Card>
                  </Link>
                  <Link href="/modules/contenu-engagement/lessons/short-form" className="group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group-hover:border-r-4 group-hover:border-amber-500">
                      <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <GraduationCap className="w-7 h-7 text-amber-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-navy mb-1">Découvrir Contenu</h3>
                      <p className="text-sm text-slate-500">Psychologie short-form</p>
                    </Card>
                  </Link>
                </div>
              </motion.section>
            </motion.div>
          )}

          {activeTab === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">Détail des parcours</h2>
                <div className="space-y-6">
                  {moduleProgress.map((mod, index) => (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/modules/${mod.id}`} className="group">
                        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white group-hover:border-r-4 group-hover:border-blue-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent opacity-50" />
                          <div className="relative p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white flex-shrink-0" style={{ background: mod.color }}>
                              <mod.icon className="w-10 h-10 md:w-12 md:h-12" />
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <span className="text-xl font-bold text-navy">{mod.progress}%</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0 text-center md:text-left">
                              <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-blue-600 transition-colors">{mod.title}</h3>
                              <p className="text-slate-600 mb-4">{modules.find(m => m.id === mod.id)?.description}</p>
                              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 mb-4">
                                <span className="flex items-center gap-1 font-medium text-navy">{mod.completed}/{mod.total} leçons</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> ~{mod.total * 20} min total</span>
                                <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${mod.progress === 100 ? 'bg-green-100 text-green-700' : mod.progress > 0 ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                                  {mod.status}
                                </span>
                              </div>
                              <div className="h-2 bg-slate-200 rounded-full overflow-hidden w-full md:w-3/4 mx-auto md:mx-0">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${mod.progress}%` }}
                                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r rounded-full" style={{ background: mod.color }}
                                />
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ x: 4 }}
                              className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white group-hover:scale-105 transition-transform"
                            >
                              <ChevronRight className="w-6 h-6" />
                            </motion.div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Learning Calendar */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">Calendrier d'apprentissage</h2>
                <Card className="border-0 shadow-lg">
                  <div className="p-6">
                    <div className="grid gap-4 sm:grid-cols-7">
                      {Array.from({ length: 28 }, (_, i) => {
                        const day = i + 1
                        const hasActivity = [1, 3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26].includes(day)
                        const isToday = day === new Date().getDate()
                        return (
                          <motion.div
                            key={day}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.02 }}
                            className={`relative aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                              hasActivity 
                                ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600' 
                                : 'bg-slate-100 text-slate-400'
                            } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                          >
                            {day}
                            {hasActivity && (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white/50"
                              />
                            )}
                          </motion.div>
                        )
                      })}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-blue-500" />
                        <span>Activité</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-slate-100 border border-slate-200" />
                        <span>Inactif</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-blue-500" />
                        <span>Aujourd'hui</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.section>
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-navy">Récompenses & Badges</h2>
                    <p className="text-slate-600">Débloquez des succès en progressant</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <span className="font-semibold text-navy">2/6</span>
                    <span>débloqués</span>
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '33%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className={`relative overflow-hidden border-0 shadow-lg transition-all duration-300 ${
                        achievement.unlocked ? 'bg-white' : 'bg-slate-50 border border-slate-200/50'
                      } group`}>
                        <div className="absolute top-4 right-4">
                          {achievement.unlocked ? (
                            <motion.div
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white"
                            >
                              <CheckCircle2 className="w-5 h-5" />
                            </motion.div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                              <Lock className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                        <div className="p-6 text-center">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${achievement.unlocked ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-slate-100'}`}>
                            <achievement.icon className={`w-8 h-8 ${achievement.unlocked ? 'text-white' : 'text-slate-400'}`} />
                          </div>
                          <h3 className={`font-bold text-lg mb-1 ${achievement.unlocked ? 'text-navy' : 'text-slate-500'}`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm mb-4 ${achievement.unlocked ? 'text-slate-600' : 'text-slate-400'}`}>
                            {achievement.desc}
                          </p>
                          {achievement.unlocked ? (
                            <Badge variant="outline" className="text-green-700 bg-green-50 border-green-200">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Débloqué {achievement.date}
                            </Badge>
                          ) : (
                            <div className="space-y-2">
                              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${achievement.progress}%` }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                  className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"
                                />
                              </div>
                              <p className="text-xs text-slate-500">{achievement.progress}% complété</p>
                            </div>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recent Activity - Always visible at bottom */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-slate-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy">Activité récente</h2>
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-navy">
              Voir tout
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={`/modules/${activity.module.toLowerCase().replace(/\s+/g, '-')}`} className="group">
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 border-l-4" style={{ borderLeftColor: activity.color.replace('text-', '') }}>
                    <div className="p-4 flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${activity.bg} flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <h3 className="font-semibold text-navy group-hover:text-blue-600 transition-colors">{activity.title}</h3>
                          <span className="text-xs text-slate-400 whitespace-nowrap">{activity.time}</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-2 truncate">{activity.desc}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100">
                            <Activity className="w-3 h-3" />
                            {activity.module}
                          </span>
                          {activity.xp && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-700">
                              <Star className="w-3 h-3 fill-current" />
                              +{activity.xp} XP
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}