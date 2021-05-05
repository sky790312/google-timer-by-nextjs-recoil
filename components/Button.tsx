import React, { ReactNode } from 'react'
import styled from 'styled-components/'

export interface Props extends StyledButtonProps {
  children: ReactNode
  onClick?: () => void
}

type StyledButtonProps = {
  buttonStyle?: 'blue' | 'blue-outline'
}

const defaultStyle: StyledButtonProps = {
  buttonStyle: 'blue',
}

export const Button: React.FC<Props> = React.memo(
  ({ children, buttonStyle = defaultStyle.buttonStyle, onClick }) => {
    return (
      <StyledButton buttonStyle={buttonStyle} onClick={onClick}>
        {children}
      </StyledButton>
    )
  },
)

const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  cursor: pointer;

  ${props => {
    switch (props.buttonStyle) {
      case 'blue':
        return `
          color: ${props.theme.colors.white};
          background-color: ${props.theme.colors.blue};
          border: 1px solid ${props.theme.colors.blue};
        `
      case 'blue-outline':
        return `
          color: ${props.theme.colors.blue};
          background-color: ${props.theme.colors.white};
          border: 1px solid ${props.theme.colors.blue};
        `
    }
  }}
`
