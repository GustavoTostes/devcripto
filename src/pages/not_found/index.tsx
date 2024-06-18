import { useNavigate } from "react-router-dom"

function NotFound() {

    const navigate = useNavigate()

    return (
  
        <main className="flex items-center flex-col h-screen p-10">

            <h1 className="text-7xl text-red-400">404</h1>
            <span className="text-md mt-5">Ops! Essa página não existe...</span>

            <button 
            className="mt-10 bg-cyan-600/15 hover:bg-cyan-600/25
            text-cyan-600 font-medium p-2 rounded"
            onClick={() => navigate('/')}>Voltar à página inicial</button>

        </main>
  
    )
  
}

export default NotFound