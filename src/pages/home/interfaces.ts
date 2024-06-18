export interface IResult {

    changePercent24Hr: string
    explorer: string
    id: string
    marketCapUsd: string
    maxSupply: string
    name: string
    priceUsd: string
    rank: string
    supply: string
    symbol: string
    volumeUsd24Hr: string
    vwap24Hr: string

}

export interface IRegistroTabela {
    
    logo: string
    id: string
    nome: string
    sigla: string
    valorMercado: string
    preco: string
    volume: string
    oscilacao: string

}

export interface TabelaProps {

    filtro: string
    conteudo: IRegistroTabela[]

}