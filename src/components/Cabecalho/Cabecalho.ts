import styled from 'styled-components'
import { Props } from '.'

export const CabecalhoHeader = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

export const CabecalhoTitulo = styled.h1<Props>`
  font-size: ${(props) => props.fontSize || 14}px;
`
