import { conectaApi } from "./conectaApi.js"

async function buscarPostsEMontarPosts(page){
    
    const buscaNaoTradata = await conectaApi.listaPosts(page)
    const busca = buscaNaoTradata.content
    const postsDom = document.getElementById('posts');
    postsDom.innerHTML = ""
    busca.forEach(element => {
        const novoPost = document.createElement('div')
        const tituloPost = document.createElement('p')
        const imgPost = document.createElement('img')
        const textoPost = document.createElement('p')
        const tags = document.createElement('ul')

        novoPost.classList.add('post')

        tituloPost.innerHTML = element.titulo
        tituloPost.classList.add('post__titulo')

        imgPost.src = element.urlImg
        imgPost.classList.add('post__img')

        textoPost.innerHTML = element.texto
        textoPost.classList.add('post__critica')

        tags.classList.add('post__tags')

        element.tags.forEach(element => {
            const liTag = document.createElement('li')
            liTag.classList.add('post__tag')
            liTag.innerHTML = '#'+element
            tags.appendChild(liTag)
        })

        novoPost.appendChild(tituloPost)
        novoPost.appendChild(imgPost)
        novoPost.appendChild(tags)
        novoPost.appendChild(textoPost)

        postsDom.appendChild(novoPost)
    });
}

buscarPostsEMontarPosts(0)

export const listarPosts = {
    buscarPostsEMontarPosts
}