import { useNavigate } from 'react-router-dom';
import { IMoeda as MoedaProps } from '../../pages/detalhes/interfaces'

function CardMoeda({moedaProps}: {moedaProps: MoedaProps}) {

    const navigate = useNavigate()

    return (

        <section className="flex justify-center items-center flex-col
        bg-zinc-900 rounded p-5
        lg:w-3/12
        md:w-5/12
        w-11/12">

            <img src={moedaProps.logo} alt={`Logo da moeda ${moedaProps.nome}`}/>

            <h2 className="text-xl mt-5">{moedaProps.nome}</h2>

            {

                Number(moedaProps.oscilacao) > 0

                ? <h2 className='text-lg mt-1 text-green-400'>{moedaProps.oscilacao}</h2>
                : <h2 className='text-lg mt-1 text-red-400'>{moedaProps.oscilacao}</h2>

            }

            <hr className="text-white w-5/6 mt-5"/>

            <div className="mt-5 text-center">

                <h2 className="text-md"><b>Valor de mercado: </b>{moedaProps.valorMercado}</h2>
                <h2 className="text-md"><b>Preço: </b>{moedaProps.preco}</h2>
                <h2 className="text-md"><b>Volume: </b>{moedaProps.oscilacao}</h2>

            </div>

            <button 
            className="mt-5 w-full bg-cyan-600/15 hover:bg-cyan-600/25
            text-cyan-600 font-medium p-2 rounded"
            onClick={() => navigate('/')}>Voltar</button>

        </section>

    )

}

export default CardMoeda