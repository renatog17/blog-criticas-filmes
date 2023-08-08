import { conectaApi } from "./conectaApi.js"
import { listarPosts} from "./listarPosts.js"
async function criarBarraPages(){
    const totalPages = await conectaApi.pegaTotalPages()
    console.log(totalPages)
    const ul = document.getElementById('paginacao__lista')
    for (let i = 1; i <=totalPages; i++) {
        const li = document.createElement('li')

        const button = document.createElement('button')
        button.addEventListener('click', (event => {
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
            listarPosts.buscarPostsEMontarPosts(i-1)
        }))
        button.innerHTML = i
        button.classList.add('paginacao__button')
        li.classList.add('paginacao__item')
        li.appendChild(button)
        ul.appendChild(li)
    }
    
}

criarBarraPages()