import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { EstiloGlobal, ContainerGlobal } from './global'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <ContainerGlobal>
        <ListaVagas />
      </ContainerGlobal>
    </>
  )
}

export default App
