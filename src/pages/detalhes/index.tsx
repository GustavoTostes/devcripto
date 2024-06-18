import { useParams } from 'react-router-dom';
import CardMoeda from '../../components/cardMoeda';
import { useEffect, useState } from 'react';
import { IResult, IMoeda } from './interfaces'

function Detalhes() {

    const { id } = useParams()

    const [moedaProps, setMoedaProps] = useState<IMoeda>({})
    const [moedaCarregou, setMoedaCarregou] = useState(false)

    useEffect(() => {

        getMoeda()

    }, [])

    async function getMoeda() {

        const url = `https://api.coincap.io/v2/assets/${id}`

        fetch(url)
        .then(response => response.json())
        .then((responseJSON) => {

            const result: IResult = responseJSON.data

            const moeda: IMoeda = {

                logo: `https://assets.coincap.io/assets/icons/${result.symbol.toLocaleLowerCase()}@2x.png`,
                nome: `${result.name} | ${result.symbol}`,
                valorMercado: price.format(Number(result.marketCapUsd)),
                preco: price.format(Number(result.vwap24Hr)),
                volume: price.format(Number(result.volumeUsd24Hr)),
                oscilacao: Number(result.changePercent24Hr).toFixed(2)

            }

            setMoedaProps(moeda)
            setMoedaCarregou(true)

        })

    }

    const price = Intl.NumberFormat('en-US', {

        style: 'currency',
        currency: 'USD'
            
    })

    return (
  
        <main className='flex items-center flex-col h-screen p-10'>

            {

                moedaCarregou

                ? <CardMoeda moedaProps={moedaProps}/>
                : <h1>Carregando...</h1>

            }

        </main>
        
    )
  
}
  
export default Detalhes