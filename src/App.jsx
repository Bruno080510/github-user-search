import { useEffect, useState } from "react"
import './App.css'
function App(){


  const [nome, setNome] = useState(null)
  const [user, setUser] = useState()
  const [botao, setBotao] = useState()


  function ler (e){
    setNome(e.target.value)
  }


  useEffect(()=>{
    fetch(`https://api.github.com/users/${nome}`)
    .then((res) => res.json())
    .then((json) => setUser(json))
  },[botao])


  return(
    <main>
      <section className="center">
      <div className="container">
          <input type="text" onChange={ler}/>
          <button onClick={setBotao}>Procurar</button>
          {user &&(
            <div>
              <h1>Nome: {user.name}</h1>
              <img src={user.avatar_url} alt="" />
            </div>
          )}
      </div>
      </section>
    </main>
  )
}


export default App
