import { useEffect, useState } from "react";

function Tarefa() {

  const [completed, setCompleted] = useState(false);     // Estado para controlar se a tarefa foi concluída
  const [tarefa, setTarefa] = useState('');         // Estado para controlar a mensagem exibida

  useEffect( () => {           // Função para verificar se a tarefa foi concluída
    if (completed){                   // Se a tarefa foi concluída
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }else{              // Se a tarefa não foi concluída
      setTarefa('')      
    }
  }, [completed])

  return (        
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={ () => setCompleted(!completed)}>Concluir Tarefa</button>
    </div>
  )
}

export default Tarefa