import { useEffect, useState } from "react"
function App(){


  const [nome, setNome] = useState(null)
  const [user, setUser] = useState()
  const [botao, setBotao] = useState()
  const [repository, setRepository] = useState()


  function ler (e){
    setNome(e.target.value)
  }


  useEffect(()=>{
    fetch(`https://api.github.com/users/${nome}`)
    .then((res) => res.json())
    .then((json) => setUser(json))
  },[botao])

  useEffect(()=>{
    fetch(`https://api.github.com/users/${nome}/repos`)
    .then((res) => res.json())
    .then((json) => setRepository(json))
  },[botao])


  return(
    <div  className=" bg-slate-950 flex flex-col w-full  justify-center items-center py-16 h-full">
      <h1 className=" text-4xl pb-3 text-white font-semibold">Github Search</h1>
      <div className=" bg-violet-700 w-[80rem] h-full flex rounded-t-2xl p-20  justify-between">
        <div className="p-9 flex-col">
          <p className=" text-4xl text-white font-bold pb-4">Digite o nome do usuario</p>
          <input type="text" placeholder="Digite o nome do user" onChange={ler} className="pb-5 w-[30rem] rounded-2xl p-5"/>
          <div className=" py-5">
          <button onClick={setBotao} className=" bg-red-700  text-white font-semibold w-48 h-16 rounded-xl">Procurar</button>
          </div>
        </div>
          {user &&(
            <div className="text-center">
              <div className=" flex items-center justify-center px-5">
              <img  className=" w-60 pb-3 rounded-full h-60 text-center" src={user.avatar_url} alt="" />
              </div>
              <h1 className=" text-lg text-white font-bold">Nome: {user.name}</h1>
              <div className="flex  px-5">
                <h1 className=" text-lg text-white font-bold">Followers: {user.followers} - </h1>
                <h1 className=" text-lg text-white font-bold"> - Following: {user.following}</h1>
              </div>
              <h1>{user.email}</h1>
              <div>

              </div>
              
            </div>
          )}
          
      </div>
      <div className="text-white w-[80rem]  bg-violet-700">
        <div className="p-10">
          {repository &&(repository.map((repo) => (
                  <h1 className="p-2">{repo.name}</h1>
              )))}
        </div>
      </div>
    </div>
  )
}


export default App
