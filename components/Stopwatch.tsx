import React, { useState } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
  stopwatchTimerState,
  stopwatchTimerStatusState,
} from '@/atoms/stopwatch'
import { delayTimeBySecond, delayTimeByMsPercentage } from '@/constants'
import { useInterval } from '@/hooks/useInterval'

export const Stopwatch: React.FC = React.memo(() => {
  const [msPercentage, setMsPercentage] = useState(0)
  const [stopwatchTimer, setStopWatchTimer] = useRecoilState(
    stopwatchTimerState,
  )
  const [stopwatchTimerStatus] = useRecoilState(stopwatchTimerStatusState)

  useInterval(() => {
    if (stopwatchTimerStatus !== 'running') {
      return
    }

    setStopWatchTimer(prevTimer => prevTimer + 1)
  }, delayTimeBySecond)

  useInterval(() => {
    if (stopwatchTimerStatus !== 'running') {
      return
    }

    setMsPercentage(prevMsPercentage =>
      prevMsPercentage >= 100 ? 0 : prevMsPercentage + 1,
    )
  }, delayTimeByMsPercentage)

  return (
    <StopwatchWrapper>
      {stopwatchTimer}s <StyledSpan>{msPercentage}</StyledSpan>
    </StopwatchWrapper>
  )
})

const StopwatchWrapper = styled.div`
  text-align: right;
  font-size: 36px;
`

const StyledSpan = styled.span`
  display: inline-block;
  width: 40px;
`
