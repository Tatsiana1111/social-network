import styled, { css } from 'styled-components'

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: inherit;
`

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  position: relative;
`

export const SInput = styled.input`
  padding: 10px 15px;
  border-radius: 15px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
`
