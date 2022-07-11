import UserRequests from "../controllers/user.controller.js"

function returnNav(){
    const header = document.querySelector("header")

    const divNav = document.createElement("div")
    const nav    = document.createElement("NAV")

    const back =  document.createElement("BUTTON")
    back.classList.add("button")

    back.onclick = () => {window.location = "/"}

    back.innerText = "Voltar"

    nav.appendChild(back)
    divNav.appendChild(nav)
    header.appendChild(divNav)
}

returnNav()

const form = document.querySelector("form")

form.addEventListener('submit', login)

async function login(e){
    e.preventDefault()

    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj)
    
    await UserRequests.login(formDataObj)
    
    document.location.reload()
}

