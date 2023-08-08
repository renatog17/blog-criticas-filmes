async function listaPosts(){
    const conexao = await fetch('http://localhost:8080/posts')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}


export const conectaApi = {
    listaPosts
}
