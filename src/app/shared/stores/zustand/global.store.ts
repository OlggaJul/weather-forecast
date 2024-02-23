import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { initTour } from '@/app/shared/constants'
import { ISelectOptions, ITourInfo } from '@/app/shared/interfaces'

interface IState {
  tours: ITourInfo[]
  selectedTourId: string
  searchRequest: string
  selectedSortOrder: ISelectOptions | null
  userName: string | null
}

interface IStore extends IState {
  handleChangeGlobalStore: (value: Partial<IState>) => void
}

// global store
export const useGlobalStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        tours: [initTour],
        selectedTourId: '1',
        searchRequest: '',
        selectedSortOrder: null,
        userName: null,
        handleChangeGlobalStore: (value) => set((state) => ({ ...state, ...value })),
      }),
      { name: 'global_store', version: 1 },
    ),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
)
