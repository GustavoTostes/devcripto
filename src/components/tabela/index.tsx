import { useNavigate } from 'react-router-dom';
import { TabelaProps } from '../../pages/home/interfaces'

function Table({tabelaProps}: {tabelaProps: TabelaProps}) {

    const navigate = useNavigate()

    const th = 'p-2 border-y-2 first:border-l-2 first:rounded-l last:border-r-2 last:rounded-r border-zinc-900'
    const td = 'p-2 bg-transparent first:rounded-l last:rounded-r cursor-pointer'

    return (

        <section className="w-5/6 md:w-4/6 lg:w-3/5 mt-8 overflow-auto">

            <table className="w-full border-separate border-spacing-y-2 overflow-scroll">

                <thead className="text-center">

                    <tr>

                        <th className={th}>Moeda</th>
                        <th className={th}>Valor de mercado</th>
                        <th className={th}>Preço</th>
                        <th className={th}>Volume</th>
                        <th className={th}>Oscilação (24h)</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        tabelaProps.conteudo
                        .filter((item) => {

                            return tabelaProps.filtro.toLocaleLowerCase() === ''
                            ? item
                            : item.nome.toLowerCase().includes(tabelaProps.filtro)

                        }).map((item) => (

                            <tr key={item.id} 
                            className="text-center bg-zinc-900 hover:bg-zinc-800" onClick={() => navigate(`/detalhes/${item.id}`)}>

                                <td className={td}>

                                    <div className="flex justify-center items-center px-2">

                                        <img 
                                        src={item.logo} 
                                        alt={`Logo da moeda ${item.nome}`}
                                        className="w-8 mr-2"/>

                                        <span>{item.nome}</span>

                                    </div>
                                    
                                </td>

                                <td className={td}>{item.valorMercado}</td>
                                <td className={td}>{item.preco}</td>
                                <td className={td}>{item.volume}</td>
                                
                                {
                                    
                                    Number(item.oscilacao) > 0

                                    ? <td className={`${td} text-green-400`}>{item.oscilacao}</td>
                                    : <td className={`${td} text-red-400`}>{item.oscilacao}</td>

                                }

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </section>

    )

}

export default Table