import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// aqui va un comentario de prueba
//AQUI VAS A EDITAR LA PAGINA EN LA QUE ESTAS TRABAJANDO :)
//mb significa margin botoom 
//alt es para cargar si no carga la imag h es altura w es grosor 
export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-r from-[#07073d] to-[#550372]">
  <div className="flex flex-col min-h-screen justify-center items-center">
  <main className="flex-grow">
      <div className="flex flex-col min-h-screen  items-center">
  <div className="h-12 w-screen bg-[#9ba3a3] "></div> 
      <img src="/mia.jpg" alt="imagen" className="h-80 w-64 mb-10 mt-10 relative right-80 border-solid border-[#5f5f66] border-8 rounded-full" /> 
</div>
    <div className="flex bg-black border-8 border-[#555555] flex-col h-96 w-52 items-center">
      <h1 className="text-4xl text-white font-bold mb-10">Lizbeth Guadalupe Hernandez R</h1>
      <p className="text-white font-bold text-2xl mb-10">ry​</p>
      <p className="text-white font-bold text-2xl mb-10 ">f</p>
      </div>

      </main>
    </div>
</div>

  )
}

