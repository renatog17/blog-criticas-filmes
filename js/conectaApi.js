async function listaPosts(page){
    const conexao = await fetch('http://localhost:8080/posts?page='+page)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

async function pegaTotalPages(){
    const conexao = await fetch('http://localhost:8080/posts?page=0')
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida.totalPages
}


export const conectaApi = {
    listaPosts,
    pegaTotalPages
}
