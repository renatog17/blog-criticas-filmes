async function listaCriticas(){
    const conexao = await fetch('http://localhost:8080/filmes')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}


export const conectaApi = {
    listaCriticas
}
