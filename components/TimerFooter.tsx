import React from 'react'
import styled from 'styled-components'
import { TimerFooterCountdown } from '@/components/TimerFooterCountdown'
import { TimerFooterStopwatch } from '@/components/TimerFooterStopwatch'
import { useRecoilState } from 'recoil'
import { tabState } from '@/atoms/tab'

export const TimerFooter: React.FC = React.memo(() => {
  const [currentTab] = useRecoilState(tabState)

  return (
    <TimerFooterWrapper>
      {currentTab === 'countdown' && <TimerFooterCountdown />}
      {currentTab === 'stopwatch' && <TimerFooterStopwatch />}
      <div>right icons</div>
    </TimerFooterWrapper>
  )
})

const TimerFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid ${props => props.theme.colors.gray};
`
