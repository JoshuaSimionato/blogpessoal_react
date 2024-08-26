
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blogpessoal-l5fv.onrender.com'   // url do servidor
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {  // url é a rota, dados é o objeto que será enviado, setDados é a função que irá receber a resposta do servidor
  const resposta = await api.post(url, dados) // resposta é a resposta do servidor
  setDados(resposta.data) // setDados é a função que irá receber a resposta do servidor
}

export const login = async(url: string, dados: Object, setDados: Function) => {  // url é a rota, dados é o objeto que será enviado, setDados é a função que irá receber a resposta do servidor
  const resposta = await api.post(url, dados)  // resposta é a resposta do servidor
  setDados(resposta.data)  // setDados é a função que irá receber a resposta do servidor
}
