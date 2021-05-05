import { atom } from 'recoil'

export type TabStateProps = 'countdown' | 'stopwatch'

export const tabState = atom<TabStateProps>({
  key: 'tab',
  default: 'countdown',
})
