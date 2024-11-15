import { CabecalhoHeader, CabecalhoTitulo } from './Cabecalho'

export type Props = {
  fontSize?: number
}

const Cabecalho = () => (
  <CabecalhoHeader>
    <CabecalhoTitulo fontSize={36}>EBAC Jobs</CabecalhoTitulo>
  </CabecalhoHeader>
)

export default Cabecalho
