import Image from 'next/image'
import { Inter } from 'next/font/google'

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
  <button className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Mi contacto</button>
  <button className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Mis proyectos</button>
  <button className="flex w-36 h-11 text-center text-1x1 font-bold border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">Quien soy yo?</button>

  </div>
    </div> 
  <div className="flex flex-col min-h-screen justify-betwen items-center">
  <main className="">
      <div className="flex flex-row box-border min-w-screen min-h-screen justify-between"> 
      <img src="/mia.jpg" alt="imagen" className="h-80 w-64 border-solid  border-gray-700 border-8 rounded-full mb-16"/> 
      <div className=" border-gray-700 border-8 bg-black h-96 w-2/3">
      <h1 className="text-4xl text-white font-bold mb-10 px-6">Lizbeth Guadalupe Hernandez R</h1>
      <p className="text-white font-bold text-1x1 mb-3 px-6">Soy una programadora con una pasión por explorar el mundo y los misterios del espacio. Mi amor por la programación me ha permitido crear soluciones creativas y eficientes para diversos problemas tecnológicos. Cuando no estoy inmersa en el código, me gusta embarcar en aventuras por todo mi pais y proximamente el mundo, absorbiendo nuevas culturas y ampliando su perspectiva. ​</p>
      <p className="text-white font-bold text-1xl mb-1 px-6">Además,me siento fascinada por el cosmos y dedico mi tiempo libre a observar las estrellas y leer sobre los últimos descubrimientos astronómicos.Algunos dicen que tengo un intelecto brillante,pero considero que soy mas conocida por mi amabilidad y trato afable. Siempre dispuesta a ayudar a los demás, me he ganado el cariño y respeto de la gente que me rodea  </p>
      </div>
</div>
      </main>
    </div>
</div>

  )
}

