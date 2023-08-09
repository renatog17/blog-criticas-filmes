import { conectaApi } from "./conectaApi.js"
import { listarPosts} from "./listarPosts.js"
const totalPages = await conectaApi.pegaTotalPages()
var paginaAtual = 0

async function criarBarraPages(){
    const ul = document.getElementById('paginacao__lista')
    ul.innerHTML = ""
    if(paginaAtual!=0)
        navegacao("<")
    if(paginaAtual!=totalPages)
        navegacao(">")  
   
}
criarBarraPages()

function navegacao(irOuVir){
    const ul = document.getElementById('paginacao__lista')
    const li = document.createElement('li')
    li.classList.add('paginacao__item')
    const btn = document.createElement('button')
    btn.classList.add('paginacao__button')
    btn.innerHTML = irOuVir
    btn.addEventListener('click', (event)=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        if(event.target.textContent === '<'){
            listarPosts.buscarPostsEMontarPosts(paginaAtual-1)
            paginaAtual = paginaAtual-1
        }
        else{
            listarPosts.buscarPostsEMontarPosts(paginaAtual+1)
            paginaAtual = paginaAtual + 1
        }
        criarBarraPages()
        console.log(paginaAtual)
    })
    li.appendChild(btn)
    ul.appendChild(li)
}