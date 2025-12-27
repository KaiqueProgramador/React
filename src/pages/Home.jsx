import { useState } from "react"
import Button from "../components/Button"

function Home() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <p>Contador: {contador}</p>
      <Button texto="Somar" />
      <button onClick={() => setContador(contador + 1)}>
        +
      </button>
    </>
  )
}

export default Home