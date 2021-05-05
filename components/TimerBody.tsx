import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { tabState } from '@/atoms/tab'
import { Countdown } from '@/components/Countdown'
import { Stopwatch } from '@/components/Stopwatch'

export const TimerBody: React.FC = React.memo(() => {
  const [currentTab] = useRecoilState(tabState)

  return (
    <TimerBodyWrapper>
      {currentTab === 'countdown' && <Countdown />}
      {currentTab === 'stopwatch' && <Stopwatch />}
    </TimerBodyWrapper>
  )
})

const TimerBodyWrapper = styled.div`
  padding: 20px;
  height: 132px;
`
