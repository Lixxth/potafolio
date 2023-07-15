import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// aqui va un comentario de prueba
//AQUI VAS A EDITAR LA PAGINA EN LA QUE ESTAS TRABAJANDO :)
//mb significa margin botoom 
//alt es para cargar si no carga la imag h es altura w es grosor 
export default function Home() {
  return (
<div className="min-w-screen min-h-screen bg-gradient-to-r from-[#07073d] to-[#550372]">
  <div className=" h-11 w-full mb-10 box-border sticky top-0 bg-gray-400 ">
  <div className='flex '>
  <button className="flex-1 mr-2 w-14 h-11 text-center block border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">1</button>
  <button className="flex-1 mr-2 w-14 h-11 text-center block border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">2</button>
  <button className="flex-1 mr-2 w-14 h-11 text-center block border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">3</button>
  <button className="flex-1 mr-2 w-14 h-11 text-center block border border-gray-400 rounded py-2 px-4 bg-gray-400 hover:bg-gray-700 text-white">4</button>
   
  </div>
    </div> 
  <div className="flex flex-col min-h-screen justify-betwen items-center">
  <main className="">
      <div className="flex flex-row box-border min-w-screen min-h-screen justify-between"> 
      <img src="/mia.jpg" alt="imagen" className="h-80 w-64 border-solid  border-[#5f5f66] border-8 rounded-full mb-16"/> 
      <div className=" border-[#555555] border-8 bg-black h-96 w-2/3">
      <h1 className="text-4xl text-white font-bold mb-10">Lizbeth Guadalupe Hernandez R</h1>
      <p className="text-white font-bold text-1x1 mb-3">Soy una programadora con una pasión por explorar el mundo y los misterios del espacio. Su amor por la programación me ha permitido crear soluciones creativas y eficientes para diversos problemas tecnológicos. Cuando no está inmersa en el código, me gusta embarcar en aventuras por todo el mundo, absorbiendo nuevas culturas y ampliando su perspectiva. ​</p>
      <p className="text-white font-bold text-1xl mb-1 ">Además,me siento fascinada por el cosmos y dedico mi tiempo libre a observar las estrellas y leer sobre los últimos descubrimientos astronómicos.Algunos dicen que tengo un intelecto brillante, soy mas conocida por mi amabilidad y trato afable. Siempre dispuesta a ayudar a los demás, se ha ganado el cariño y respeto de la gente que me rodea  </p>
      </div>
</div>
      </main>
    </div>
</div>

  )
}

