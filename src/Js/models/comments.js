export {commentsSection, Comments}
import {API_request_comments} from '../controllers/comments.controller.js'

function commentsSection(){
    const main      = document.querySelector("main")

    const section = document.createElement("section")
    const divTitle = document.createElement('div')
    const h2TitleComment = document.createElement('h2')
    const divCards  = document.createElement('div')
    const cardsComments     = document.createElement('ul')
    
    divTitle.classList.add("divTitle")
    h2TitleComment.classList.add("titleComment")
    divCards.classList.add("divCards")
    cardsComments.classList.add("cardsComments")

        const createComment = document.createElement("FORM")
        createComment.setAttribute("id", "commentForm")
        section.appendChild(createComment)
      
        const inputLabel = document.createElement("INPUT")
        inputLabel.setAttribute("type", "text")
        inputLabel.setAttribute("name", "content")
        inputLabel.setAttribute("placeholder", "O que você está pensando?")
        createComment.appendChild(inputLabel)

        const buttonSend = document.createElement("BUTTON")
        buttonSend.setAttribute("type", "submit")

        buttonSend.innerText = "Enviar"
        createComment.appendChild(buttonSend)
        
        createComment.addEventListener('submit', postSend) 

    h2TitleComment.innerText = "Comentários dos Kenzinhos:"

    main.appendChild(section)
    section.appendChild(divTitle)
    divTitle.appendChild(h2TitleComment)
    section.appendChild(divCards)
    divCards.appendChild(cardsComments)

}

class Comments {

    static createCard(obj){
        console.log(obj.data.length)
        const li = document.createElement('li')

        for(let i= 0; i < obj.data.length; i++){
            const avatar = obj.data[i].user.avatarUrl
            const userName = obj.data[i].user.username
            const comment = obj.data[i].content
            const getdate = obj.data[i].createdAt
            
            const date = getdate.replaceAll("-","/").slice(0, 10)

            const div  = document.createElement('div')
            const div2 = document.createElement('div')
            const div3 = document.createElement('div')
            const div4 = document.createElement('div')
            const div5 = document.createElement('div')
            const divContent = document.createElement('div')

            const tgimagem = document.createElement('img')
            const tgName  = document.createElement('p')
            const tgComment = document.createElement('p')
            const tgDate = document.createElement('p')


            div.classList.add("divPricipal")
            div2.classList.add("divAvatar")
            div3.classList.add("divUsername")
            div4.classList.add("divComentario")
            div5.classList.add("divData")
            divContent.classList.add("DivConteudo")
            tgimagem.classList.add("avatar")
            tgName.classList.add("userName")
            tgComment.classList.add("comment")
            tgDate.classList.add("postedDate")


            tgimagem.src = `${avatar}`
            tgName.innerHTML = `${userName}`
            tgComment.innerHTML = `${comment}`
            tgDate.innerHTML = `Postado em: ${date}`
            
            div.append(div2, divContent)
            divContent.append(div3, div4, div5)
            div2.appendChild(tgimagem)
            div3.appendChild(tgName)
            div4.appendChild(tgComment)
            div5.appendChild(tgDate)

            li.appendChild(div)
            const cardsComments = document.querySelector(".cardsComments")
            cardsComments.appendChild(li)
        }
    
    }

    static listCard(arrComments){
        arrComments.forEach((obj) => this.createCard(obj))
    }
}

async function postSend(e){
    e.preventDefault()

    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj)

    await API_request_comments.post(formDataObj)

    form.onsubmit = () => {window.location = "./userInterface.html"}
}