import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { timerState, timerStatusState } from '@/atoms/countdown'
import { showHHMMSS } from '@/utils'
import { delayTimeBySecond } from '@/constants'
import { useInterval } from '@/hooks/useInterval'

export const CountdownShow: React.FC = React.memo(() => {
  const [currentTimer, setCurrentTimer] = useRecoilState(timerState)
  const [currentTimerStatus, setCurrentTimerStatus] = useRecoilState(
    timerStatusState,
  )

  useInterval(() => {
    if (!currentTimer || currentTimerStatus !== 'running') {
      return
    }

    setCurrentTimer(prevTimer => prevTimer - 1)
  }, delayTimeBySecond)

  const onCountDownClick = () => {
    if (currentTimerStatus === 'running') {
      return
    }

    setCurrentTimerStatus('editing')
  }

  return (
    <CountdownShowWrapper
      onClick={onCountDownClick}
      canEdit={currentTimerStatus === 'stop'}
    >
      {showHHMMSS(currentTimer)}
    </CountdownShowWrapper>
  )
})

const CountdownShowWrapper = styled.div<{ canEdit: boolean }>`
  text-align: right;
  font-size: 36px;
  cursor: ${props => (props.canEdit ? 'pointer' : 'default')};
`
