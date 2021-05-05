import React from 'react'
import styled from 'styled-components'
import { TimerHeader } from '@/components/TimerHeader'
import { TimerBody } from '@/components/TimerBody'
import { TimerFooter } from '@/components/TimerFooter'

export const Timer: React.FC = () => {
  return (
    <TimerWrapper>
      <TimerHeader />
      <TimerBody />
      <TimerFooter />
    </TimerWrapper>
  )
}

const TimerWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 5px;
  max-width: 460px;
`
