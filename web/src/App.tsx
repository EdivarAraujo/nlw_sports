import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/italia90.jpg" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Italia 90</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/ufc.jpg" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Ufc</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/nba.jpg" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Nba</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/ridersRepublic.jpg" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Ride Reublic</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/forzaHorizon.jpg" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Forza Horizon
            </strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden ">
          <img src="/fifa22.jpg" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fifa22</strong>
            <span className="text-zinc-300 text-sm-14 block mt-1">
              4 anúncios
            </span>
          </div>
        </a>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anuncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex itens-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio!
          </button>
        </div>
      </div>
    </div>
  )
}
//piru
export default App
