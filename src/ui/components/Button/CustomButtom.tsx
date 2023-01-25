import styled, { css } from 'styled-components'
export enum ButtonVariant {
   solid = 'solid',
   outline = 'outline',
   ghost = 'ghost',
}

export enum ButtonColor {
   primary = 'primary',
   secondary = 'secondary',
   success = 'success',
   danger = 'danger',
}
interface ButtonProps {
   variant: ButtonVariant
   color: ButtonColor
}

// TODO want to customize difenent varints of button

export const Button = styled.button<ButtonProps>`
   // ...

   ${({ variant = ButtonVariant.solid, color = ButtonColor.primary, theme }) => {
      const themeColor = theme.colors.primary

      switch (variant) {
         case ButtonVariant.solid:
            return css`
               background-color: ${themeColor};
            `
         case ButtonVariant.outline:
            return css`
               background-color: transparent;
               color: ${themeColor};
               border: 1px solid ${themeColor};
            `
         case ButtonVariant.ghost:
            return css`
               background-color: transparent;
               color: ${themeColor};
               border: none;
               box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
            `
      }
   }}
`
