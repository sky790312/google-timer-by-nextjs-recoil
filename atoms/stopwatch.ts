import { atom } from 'recoil'
import { defaultStopwatchTimer } from '@/constants'

type StopwatchTimerStatusStateProps = 'stop' | 'editing' | 'running'

export const stopwatchTimerStatusState = atom<StopwatchTimerStatusStateProps>({
  key: 'stopwatchTimerStatus',
  default: 'stop',
})

export const stopwatchTimerState = atom({
  key: 'stopwatchTimer',
  default: defaultStopwatchTimer,
})
