import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { timerStatusState } from '@/atoms/countdown'
import { CountdownShow } from '@/components/CountdownShow'
import { CountdownEdit } from '@/components/CountdownEdit'

export const Countdown: React.FC = React.memo(() => {
  const [currentTimerStatus] = useRecoilState(timerStatusState)

  return (
    <CountdownWrapper>
      {currentTimerStatus === 'editing' ? <CountdownEdit /> : <CountdownShow />}
    </CountdownWrapper>
  )
})

const CountdownWrapper = styled.div``
