import { useState } from "react";

function Contador() {
  // Código TypeScript
  const [valor, setValor] = useState(0);  // retorna um array com 2 posições
  
  function handleCklick() {  // função para incrementar o valor
    setValor(valor + 1); // incrementa o valor
  }

  function handClickSubtracao() { // função para decrementar o valor
    setValor(valor - 1);  // decrementa o valor
  }

  return (

    <div>

      <h2>Componente do meu Contador</h2>      {/* Título do componente */}

      <p>O valor atual do meu estado é: {valor}</p>     {/* Exibe o valor do estado */}
      <button onClick={handleCklick}>Adicionar 1</button>    {/* Botão para incrementar o valor */}
      <button onClick={handClickSubtracao}>Subtraçao -1</button>      {/* Botão para decrementar o valor */}

    </div>
  );
}

export default Contador
