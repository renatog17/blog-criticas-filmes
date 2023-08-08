import { conectaApi } from "./conectaApi.js"

async function buscarPostsEMontarPosts(){
    
    const busca = await conectaApi.listaCriticas()

    const postsDom = document.getElementById('posts');

    busca.forEach(element => {
        const novoPost = document.createElement('div')
        novoPost.classList.add('post')

        const tituloPost = document.createElement('p')
        tituloPost.innerHTML = element.titulo
        tituloPost.classList.add('post__titulo')

        const imgPost = document.createElement('img')
        imgPost.src = element.urlImg
        imgPost.classList.add('post__img')

        const textoPost = document.createElement('p')
        textoPost.innerHTML = element.criticas[0].critica
        textoPost.classList.add('post__critica')

        novoPost.appendChild(tituloPost)
        novoPost.appendChild(imgPost)
        novoPost.appendChild(textoPost)

        postsDom.appendChild(novoPost)
    });
}

buscarPostsEMontarPosts()