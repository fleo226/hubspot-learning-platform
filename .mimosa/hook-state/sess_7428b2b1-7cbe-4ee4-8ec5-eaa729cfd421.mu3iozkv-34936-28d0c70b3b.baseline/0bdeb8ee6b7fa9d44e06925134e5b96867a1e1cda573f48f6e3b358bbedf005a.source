import { create } from "zustand"

interface LearningState {
  // Progress
  completedLessons: Set<string>
  // Favorites
  favoriteModules: Set<string>
  favoriteLessons: Set<string>
  // Notes
  notes: Record<string, string> // lessonId -> note content

  // Actions
  markLessonCompleted: (moduleId: string, lessonId: string) => void
  isLessonCompleted: (moduleId: string, lessonId: string) => boolean
  toggleModuleFavorite: (moduleId: string) => void
  isModuleFavorite: (moduleId: string) => boolean
  toggleLessonFavorite: (moduleId: string, lessonId: string) => void
  isLessonFavorite: (moduleId: string, lessonId: string) => boolean
  addNote: (moduleId: string, lessonId: string, content: string) => void
  getNote: (moduleId: string, lessonId: string) => string | undefined
  removeNote: (moduleId: string, lessonId: string) => void
}

const useLearningStore = create<LearningState>((set, get) => ({
  // Initial state
  completedLessons: new Set(),
  favoriteModules: new Set(),
  favoriteLessons: new Set(),
  notes: {},

  // Progress
  markLessonCompleted: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    set((state) => {
      const newSet = new Set(state.completedLessons)
      newSet.add(id)
      return { completedLessons: newSet }
    })
  },
  isLessonCompleted: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    return get().completedLessons.has(id)
  },

  // Favorites - Modules
  toggleModuleFavorite: (moduleId: string) => {
    set((state) => {
      const newSet = new Set(state.favoriteModules)
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId)
      } else {
        newSet.add(moduleId)
      }
      return { favoriteModules: newSet }
    })
  },
  isModuleFavorite: (moduleId: string) => {
    return get().favoriteModules.has(moduleId)
  },

  // Favorites - Lessons
  toggleLessonFavorite: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    set((state) => {
      const newSet = new Set(state.favoriteLessons)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return { favoriteLessons: newSet }
    })
  },
  isLessonFavorite: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    return get().favoriteLessons.has(id)
  },

  // Notes
  addNote: (moduleId: string, lessonId: string, content: string) => {
    const id = `${moduleId}:${lessonId}`
    set((state) => ({
      notes: {
        ...state.notes,
        [id]: content,
      },
    }))
  },
  getNote: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    return get().notes[id]
  },
  removeNote: (moduleId: string, lessonId: string) => {
    const id = `${moduleId}:${lessonId}`
    set((state) => {
      const { [id]: _, ...rest } = state.notes
      return { notes: rest }
    })
  },
}))

export default useLearningStore