import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    login()
    navigate("/dashboard")
  }

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Entrar</button>
    </>
  )
}

export default Login
