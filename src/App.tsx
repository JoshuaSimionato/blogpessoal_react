import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/tarefa'

function App() {

  return (
    <>
        <Home 
          titulo = "Minha primeira postagem"
          texto = "Texto da minha primeira postagem"
        />

         <Contador />

        <Tarefa />
    </>
  )
}

export default App