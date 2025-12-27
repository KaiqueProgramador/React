import { useAuth } from "../contexts/AuthContext"

function Dashboard() {
  const { user } = useAuth()

  return <h2>Bem-vindo, {user?.name}</h2>
}

export default Dashboard
