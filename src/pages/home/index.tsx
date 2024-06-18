import Table from '../../components/tabela';
import { useEffect, useState } from 'react';
import { IRegistroTabela, IResult, TabelaProps } from './interfaces';

function Home() {

	const [filtro, setFiltro] = useState('')
  	const [dadosTabela, setDadosTabela] = useState<IRegistroTabela[]>([])
	const [carregouTabela, setCarregouTabela] = useState(false)

	useEffect(() => {

		getDadosTabela()

	}, [])

  	let registrosTabela: IRegistroTabela[] = []

	const priceCompact = Intl.NumberFormat('en-US', {

        style: 'currency',
        currency: 'USD',
        notation: 'compact'
            
    })

	function getDadosTabela() {

		const url = 'https://api.coincap.io/v2/assets'

		fetch(url)
		.then(response => response.json())
		.then((responseJSON) => {

			const result: IResult[] = responseJSON.data

			result.map((item) => {

				const registro: IRegistroTabela = {

					logo: `https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}@2x.png`,
					id: item.id,
					nome: `${item.name} | ${item.symbol}`,
					sigla: item.symbol,
					valorMercado: priceCompact.format(Number(item.marketCapUsd)),
					preco: priceCompact.format(Number(item.vwap24Hr)),
					volume: priceCompact.format(Number(item.volumeUsd24Hr)),
					oscilacao: Number(item.changePercent24Hr).toFixed(2)

				}

				registrosTabela.push(registro)

			})

			setDadosTabela(registrosTabela)
			setCarregouTabela(true)

		})

	}

	let tabelaProps: TabelaProps = {

		conteudo: dadosTabela,
		filtro: filtro

	}
  	
	return (

		<main className='flex justify-center items-center flex-col p-10'>

			<form className='w-5/6 md:w-4/6 lg:w-3/5 flex'>

				<input 
				type="text" 
				placeholder="Qual moeda você está procurando?"
				className='w-full p-2 bg-zinc-900 rounded hover:bg-zinc-800 
				focus:outline-none'
				onChange={(e) => setFiltro(e.target.value)}/>

			</form>

			{

				carregouTabela 

				? <Table tabelaProps={tabelaProps}/>
				: <section className='w-5/6 md:w-4/6 lg:w-3/5 mt-8 flex justify-center items-center'>Carregando...</section>

			}

		</main>

	)

}
  
export default Home