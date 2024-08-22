import { Component } from "react";

interface State {
    contador: number;
}

class ContadorClasse extends Component<{}, State> {     // Componente de classe
    constructor(props: {}) {      
        super(props);      // Chama o construtor da classe pai
        this.state = {     // Inicializa o estado do componente
            contador: 0
        };
    }

    // Método para incrementar o contador
    incrementar = (): void => {
        this.setState((prevState) => ({contador: prevState.contador + 1,}));
    };

    render() {
        return (
            <div>
                <h2>Componente Contador = Classe</h2>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        );
    }
}

export default ContadorClasse;