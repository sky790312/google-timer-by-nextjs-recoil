import { atom } from 'recoil'
import {
  defaultTimer,
  defaultTimerHH,
  defaultTimerMM,
  defaultTimerSS,
} from '@/constants'

type TimerStatusStateProps = 'stop' | 'editing' | 'running'

export const timerStatusState = atom<TimerStatusStateProps>({
  key: 'timerStatus',
  default: 'stop',
})

export const timerState = atom({
  key: 'timer',
  default: defaultTimer,
})

export const timerHHState = atom({
  key: 'timerHH',
  default: defaultTimerHH,
})

export const timerMMState = atom({
  key: 'timerMM',
  default: defaultTimerMM,
})

export const timerSSState = atom({
  key: 'timerSS',
  default: defaultTimerSS,
})
