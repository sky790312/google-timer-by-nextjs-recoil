import React from 'react'
import styled from 'styled-components'
import { Button } from '@/components/Button'
import { useRecoilState } from 'recoil'
import {
  timerState,
  timerStatusState,
  timerHHState,
  timerMMState,
  timerSSState,
} from '@/atoms/countdown'
import {
  defaultTimer,
  defaultTimerHH,
  defaultTimerMM,
  defaultTimerSS,
} from '@/constants'

export const TimerFooterCountdown: React.FC = React.memo(() => {
  const [TimerHH, setTimerHH] = useRecoilState(timerHHState)
  const [TimerMM, setTimerMM] = useRecoilState(timerMMState)
  const [TimerSS, setTimerSS] = useRecoilState(timerSSState)
  const [currentTimerStatus, setCurrentTimerStatus] = useRecoilState(
    timerStatusState,
  )
  const [, setCurrentTimer] = useRecoilState(timerState)

  const start = () => {
    if (currentTimerStatus === 'running') {
      setCurrentTimerStatus('stop')
    } else if (currentTimerStatus === 'stop') {
      setCurrentTimerStatus('running')
    } else if (currentTimerStatus === 'editing') {
      const newTimer =
        Number(TimerHH) * 60 * 60 + Number(TimerMM) * 60 + Number(TimerSS)
      setCurrentTimer(newTimer)
      setCurrentTimerStatus('running')
    }
  }
  const stop = () => setCurrentTimerStatus('stop')
  const reset = () => {
    if (currentTimerStatus === 'editing') {
      return
    }

    setCurrentTimer(defaultTimer)
    setTimerHH(defaultTimerHH)
    setTimerMM(defaultTimerMM)
    setTimerSS(defaultTimerSS)
  }

  return (
    <TimerFooterCountdownWrapper>
      {currentTimerStatus === 'running' ? (
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
    </TimerFooterCountdownWrapper>
  )
})

const TimerFooterCountdownWrapper = styled.div`
  > * {
    margin-right: 20px;
  }
`
