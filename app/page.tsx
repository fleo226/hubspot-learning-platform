"use client"

import { modules } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, BookOpen, GraduationCap, Code, ArrowRight, CheckCircle, Users, Zap, Award, Target } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const moduleData = [
  {
    id: "ia-marketing",
    title: "IA pour Marketers Opérationnels",
    description: "Maîtrisez les outils et stratégies d'IA pour optimiser vos campagnes marketing",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    lessons: 4,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stats: ["Générative & Prédictive", "Prompt Engineering", "Stack d'outils", "Mesure IA"],
  },
  {
    id: "strategie-croissance",
    title: "Stratégie et Croissance Mesurable",
    description: "Frameworks éprouvés pour développer votre activité marketing",
    icon: BookOpen,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    lessons: 3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: ["Plan Marketing", "RevOps", "Customer Success"],
  },
  {
    id: "contenu-engagement",
    title: "Contenu et Engagement",
    description: "Créer du contenu qui convertit et fidélise votre audience",
    icon: GraduationCap,
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
    lessons: 3,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    stats: ["Psychologie Short-form", "Marketing Inclusif", "Cours Digitaux"],
  },
  {
    id: "outils-pratiques",
    title: "Boîte à Outils Pratiques",
    description: "Utiliser les outils gratuits HubSpot pour améliorer votre productivité",
    icon: Code,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
    lessons: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    stats: ["AI Search Grader", "Make My Persona", "Content Inventory"],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-navy to-blue-600 flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-navy">LearnHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/modules/ia-marketing" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">Parcours</Link>
              <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-navy transition-colors">Tableau de bord</Link>
            </div>
            <Link href="/modules/ia-marketing">
              <Button className="btn-primary hidden sm:block">Commencer gratuitement</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-blue-500/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-700 text-sm font-medium mb-8 border border-blue-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Nouveau : Parcours IA Marketing complet</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Maîtrisez le marketing
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                à l'ère de l'IA
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mb-10 leading-relaxed"
          >
            Des frameworks éprouvés, des outils pratiques et une communauté de marketers qui réussissent avec l'intelligence artificielle. 
            Accédez à 13 leçons structurées basées sur l'expertise HubSpot.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/modules/ia-marketing">
              <Button className="btn-primary text-lg px-8 py-3 group">
                Commencer le premier parcours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="text-lg px-8 py-3 border-slate-300 hover:border-navy hover:text-navy">
                Voir le tableau de bord
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>5,000+ marketers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Contenu HubSpot vérifié</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Mise à jour continue</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* Modules Grid */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Parcours d'apprentissage structurés
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quatre parcours progressifs conçus pour vous faire monter en compétence, 
              du fondamental à l'expertise opérationnelle.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {moduleData.map((module, index) => (
              <motion.div
                key={module.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link href={`/modules/${module.id}`} className="block group">
                  <Card className="relative overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white">
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0">
                      <motion.img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                          className={`w-12 h-12 rounded-xl ${module.bgColor} flex items-center justify-center ${module.color.replace('from-', 'text-').replace('to-', '')} text-white`}
                        >
                          <module.icon className="w-6 h-6" />
                        </motion.div>
                        <span className="text-xs font-semibold text-white/80 px-2 py-1 rounded bg-white/10 backdrop-blur">
                          {module.lessons} leçons
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                        {module.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {module.stats.map((stat, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="text-xs px-2 py-1 rounded bg-white/10 text-white/80 backdrop-blur border border-white/20"
                          >
                            {stat}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ x: 4, transition: { duration: 0.2 } }}
                        className="flex items-center justify-between text-white font-medium text-sm"
                      >
                        <span>Commencer ce parcours</span>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Pourquoi choisir LearnHub ?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une plateforme conçue par des marketers, pour des marketers.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Zap, title: "Contenu expert HubSpot", desc: "13 leçons basées sur les meilleurs articles et outils HubSpot, curatées et structurées pour l'apprentissage." },
              { icon: CheckCircle, title: "Progression mesurable", desc: "Suivez votre avancement, vos séries d'apprentissage et vos modules favoris avec un tableau de bord complet." },
              { icon: Target, title: "Focus pratique", desc: "Chaque leçon inclut des actions concrètes, des templates et des liens vers les outils réels pour application immédiate." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-6 text-navy">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-blue-700 to-violet-700" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre marketing ?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers de marketers qui maîtrisent déjà l'IA. 
              Accès gratuit, sans carte bancaire, annulable à tout moment.
            </p>
            <Link href="/modules/ia-marketing">
              <Button className="btn-primary bg-white text-navy hover:bg-slate-100 text-lg px-10 py-4 group" size="lg">
                Commencer maintenant gratuitement
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">LearnHub</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                La plateforme d'apprentissage marketing pour l'ère de l'IA. 
                Contenu expert HubSpot, parcours structurés, résultats concrets.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Parcours</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {moduleData.map(m => (
                  <li key={m.id}><Link href={`/modules/${m.id}`} className="hover:text-white transition-colors">{m.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Tableau de bord</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Communauté</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            © 2024 LearnHub. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}