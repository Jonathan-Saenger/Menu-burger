import { useState } from "react";

function App() {
  // State (état ou données)
  const [prenom, setPrenom] = useState("Jonathan") 
  const [count, setCount] = useState(1)

  // Comportements
  const handleClick = () => {
    setCount(count +1)
  }

  // Affichage (render)
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  )
}

export default App;
