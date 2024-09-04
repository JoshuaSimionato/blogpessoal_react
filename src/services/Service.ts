
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {  // url é a rota, dados é o objeto que será enviado, setDados é a função que irá receber a resposta do servidor
  const resposta = await api.post(url, dados) // resposta é a resposta do servidor
  setDados(resposta.data) // setDados é a função que irá receber a resposta do servidor
}

export const login = async(url: string, dados: Object, setDados: Function) => {  // url é a rota, dados é o objeto que será enviado, setDados é a função que irá receber a resposta do servidor
  const resposta = await api.post(url, dados)  // resposta é a resposta do servidor
  setDados(resposta.data)  // setDados é a função que irá receber a resposta do servidor
}

export const buscar = async(
  url: string, setDados: Function, header: Object) => {  // url é a rota, setDados é a função que irá receber a resposta do servidor, header é o cabeçalho da requisição
  const resposta = await api.get(url, header)   // resposta é a resposta do servidor
  setDados(resposta.data)     // setDados é a função que irá receber a resposta do servidor
}

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {   
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}
