import React, { useState } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { timerHHState, timerMMState, timerSSState } from '@/atoms/countdown'

export const CountdownEdit: React.FC = React.memo(() => {
  const [timerHH, setTimerHH] = useRecoilState(timerHHState)
  const [timerMM, setTimerMM] = useRecoilState(timerMMState)
  const [timerSS, setTimerSS] = useRecoilState(timerSSState)
  const [inputHH, setInputHH] = useState(timerHH)
  const [inputMM, setInputMM] = useState(timerMM)
  const [inputSS, setInputSS] = useState(timerSS)

  const onTimerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    e.target.value = Math.max(0, parseInt(e.target.value))
      .toString()
      .slice(0, 2)
    const retrictValue = e.target.value
    if (type === 'HH') {
      setInputHH(retrictValue)
      setTimerHH(retrictValue)
      setTimerMM(inputMM)
      setTimerSS(inputSS)
    } else if (type === 'MM') {
      setInputMM(retrictValue)
      setTimerHH(inputHH)
      setTimerMM(retrictValue)
      setTimerSS(inputSS)
    } else if (type === 'SS') {
      setInputSS(retrictValue)
      setTimerHH(inputHH)
      setTimerMM(inputMM)
      setTimerSS(retrictValue)
    }
  }

  return (
    <CountdownEditWrapper>
      <StyledInput
        type='number'
        placeholder='HH'
        value={inputHH}
        onChange={e => onTimerChange(e, 'HH')}
      />
      :
      <StyledInput
        type='number'
        placeholder='MM'
        value={inputMM}
        onChange={e => onTimerChange(e, 'MM')}
      />
      :
      <StyledInput
        type='number'
        placeholder='SS'
        value={inputSS}
        onChange={e => onTimerChange(e, 'SS')}
      />
    </CountdownEditWrapper>
  )
})

const CountdownEditWrapper = styled.div`
  text-align: right;
  font-size: 36px;
  margin-right: -20px;
  color: ${props => props.theme.colors.gray};
`

const StyledInput = styled.input`
  font-size: 36px;
  outline: none;
  border: none;
  max-width: 65px;
  overflow: auto;
  color: ${props => props.theme.colors.gray};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
