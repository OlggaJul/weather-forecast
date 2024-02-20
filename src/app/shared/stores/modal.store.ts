import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ReactNode } from 'react'

interface IState {
  modalComponent: ReactNode | null
}

interface IStore extends IState {
  handleChangeModalStore: (value: Partial<IState>) => void
}

// global store
export const useModalStore = create<IStore>()(
  devtools(
    (set) => ({
      modalComponent: null,

      handleChangeModalStore: (value) => set((state) => ({ ...state, ...value })),
    }),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
)
