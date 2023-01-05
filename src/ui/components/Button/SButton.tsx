import styled, { css } from 'styled-components'

type ButtonProps = {
  disabled?: boolean
}

export const SButton = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.button.default.bg};
  color: ${({ theme }) => theme.button.default.text};
  padding: 12px 20px;
  //width: 100%;
  border-radius: 10px;
  border: none;
  transition: 0.2s;
  &:hover {
    box-shadow: inset 0 0 30px 30px rgba(255, 255, 255, 0.1);
  }
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `},
`

export const SButtonGreen = styled(SButton)`
  background-color: ${({ theme }) => theme.button.green.bg};
  color: ${({ theme }) => theme.button.green.text};
`
