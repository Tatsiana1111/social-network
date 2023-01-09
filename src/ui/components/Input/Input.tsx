import styled, { css } from 'styled-components'

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: inherit;
  background-color: white;
`

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  position: relative;
  background-color: inherit;
`

export const SInput = styled.input`
  padding: 10px 15px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  &::placeholder {
    text-align: center;
    opacity: 0.4;
  }
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    opacity: 1;
  }
`
