import styled from 'styled-components'

export const Box = styled.div`
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   padding: 20px;
   background-color: ${props => props.theme.colors.backGroundColor2};
   border-radius: 15px;
`
