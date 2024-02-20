import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { ITourInfo } from '@/app/shared/interfaces/interfaces'

interface IState {
  tours: ITourInfo[]
  selectedTourId: string
}

interface IStore extends IState {
  handleChangeGlobalStore: (value: Partial<IState>) => void
}

// global store
export const useGlobalStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        tours: [],
        selectedTourId: '',
        handleChangeGlobalStore: (value) => set((state) => ({ ...state, ...value })),
      }),
      { name: 'global_store', version: 1 },
    ),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
)
