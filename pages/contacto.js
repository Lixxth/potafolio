import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
// aqui va un comentario de prueba
//AQUI VAS A EDITAR LA PAGINA EN LA QUE ESTAS TRABAJANDO :)
//mb significa margin botoom 
//alt es para cargar si no carga la imag h es altura w es grosor 
//px es para el padding
export default function Home() {
  return (
<div className="min-w-screen min-h-screen bg-gradient-to-r from-[#07073d] to-[#550372]">
  <div className="flex flex-row-reverse h-11 w-full mb-10 box-border sticky top-0 bg-gray-400 ">
  <div className='flex flex-row'>
  <img src="/cohete.jpg" alt="imagen" className=" h-11 w-40 mb-16 relative right-full"/>
  <Link href="/contacto" className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Mi contacto</Link>
  <button className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Mis proyectos</button>
  <button className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Quien soy yo?</button>

  </div>
    </div> 
  <div className="flex flex-col min-h-screen justify-betwen items-center">
  <main className="">
      <div className="flex flex-row box-border min-w-screen min-h-screen justify-center"> 
      <div className=" border-gray-700 border-8 bg-black h-96 w-full">
      <h1 className="text-4xl text-white font-bold mb-10 px-6">¿De verdad quieres contactarme? ʕ•́ᴥ•̀ʔっ♡ </h1>
      <h1 className="text-1xl text-white font-bold mb-10 px-6">Aqui te dejo todos las redes sociales por las que me encuentras c:</h1>
      </div>
</div>
      </main>
    </div>
</div>

  )
}

