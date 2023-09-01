import { useEffect, useState } from "react"
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
    <div  className=" bg-slate-950 flex flex-col  justify-center items-center py-16 h-screen">
      <h1 className=" text-4xl pb-3 text-white font-semibold">Github Search</h1>
      <div className=" bg-violet-700 w-[40rem] h-full rounded-2xl  text-center justify-center">
        <div className="p-9 flex-col">
          <p className=" text-xl text-white font-bold pb-2">Digite o nome do usuario</p>
          <input type="text" placeholder="Digite o nome do user" onChange={ler} className="pb-5 w-80 rounded-2xl p-5"/>
          <div className=" p-5">
          <button onClick={setBotao} className=" bg-red-700  text-white font-semibold  w-40 h-12 rounded">Procurar</button>
          </div>
        </div>
          {user &&(
            <div>
              <h1 className=" text-lg text-white font-bold">Nome: {user.name}</h1>
              <div className=" flex items-center justify-center p-5">
              <img  className=" w-60 pb-3 rounded-full h-60 text-center" src={user.avatar_url} alt="" />
              </div>
            </div>
          )}
      </div>
    </div>
  )
}


export default App
