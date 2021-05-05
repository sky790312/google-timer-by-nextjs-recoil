import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { tabState, TabStateProps } from '@/atoms/tab'

interface Tab {
  name: TabStateProps
  text: string
}

const Tabs: Tab[] = [
  {
    name: 'countdown',
    text: 'TIMER',
  },
  {
    name: 'stopwatch',
    text: 'STOPWATCH',
  },
]

export const TimerHeader: React.FC = React.memo(() => {
  const [currentTab, setCurrentTab] = useRecoilState(tabState)

  const onTabClick = (tabName: TabStateProps) => {
    if (tabName === currentTab) {
      return
    }

    setCurrentTab(tabName)
  }

  return (
    <TimerHeaderWrapper>
      {Tabs.map((tab: Tab) => (
        <StyledHeaderTab
          key={tab.name}
          isActive={tab.name === currentTab}
          onClick={() => onTabClick(tab.name)}
        >
          {tab.text}
        </StyledHeaderTab>
      ))}
    </TimerHeaderWrapper>
  )
})

const TimerHeaderWrapper = styled.div`
  display: flex;
  padding: 20px 0;

  > div {
    width: 50%;
  }
`

const StyledHeaderTab = styled.div<{ isActive: boolean }>`
  text-align: center;
  padding-bottom: 20px;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  border-bottom: 2px solid
    ${props =>
      props.isActive ? props.theme.colors.blue : props.theme.colors.gray};
`
