import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"


function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  return (
    <>
      <div className='w-full bg-blue-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase' >
            <Link to='/home' className="text-2x1 font-bold">Blog Pessoal
            </Link></div>

            <div className='flex gap-4'>
              Postagens
              Temas
              Cadastrar tema
              Perfil
              <Link to='' onClick={logout} className="hover:underline">
              Sair
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar