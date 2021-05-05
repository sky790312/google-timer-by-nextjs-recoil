import React from 'react'
import styled from 'styled-components'
import { Button } from '@/components/Button'
import { useRecoilState } from 'recoil'
import {
  stopwatchTimerState,
  stopwatchTimerStatusState,
} from '@/atoms/stopwatch'
import { defaultStopwatchTimer } from '@/constants'

export const TimerFooterStopwatch: React.FC = React.memo(() => {
  const [stopwatchTimerStatus, setStopwatchTimerStatus] = useRecoilState(
    stopwatchTimerStatusState,
  )
  const [, setStopwatchTimer] = useRecoilState(stopwatchTimerState)

  const start = () => {
    if (stopwatchTimerStatus === 'running') {
      setStopwatchTimerStatus('stop')
    } else if (stopwatchTimerStatus === 'stop') {
      setStopwatchTimerStatus('running')
    } else if (stopwatchTimerStatus === 'editing') {
      setStopwatchTimerStatus('running')
    }
  }
  const stop = () => setStopwatchTimerStatus('stop')
  const reset = () => setStopwatchTimer(defaultStopwatchTimer)

  return (
    <TimerFooterStopwatchWrapper>
      {stopwatchTimerStatus === 'running' ? (
        <Button buttonStyle={'blue'} onClick={stop}>
          STOP
        </Button>
      ) : (
        <Button buttonStyle={'blue'} onClick={start}>
          START
        </Button>
      )}
      <Button buttonStyle={'blue-outline'} onClick={reset}>
        RESET
      </Button>
    </TimerFooterStopwatchWrapper>
  )
})

const TimerFooterStopwatchWrapper = styled.div`
  > * {
    margin-right: 20px;
  }
`
