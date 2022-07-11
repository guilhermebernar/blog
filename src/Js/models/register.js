import UserRequests from "../controllers/user.controller.js"

function returnNav(){
    const header = document.querySelector("header")

    const divNav = document.createElement("div")
    const nav    = document.createElement("NAV")

    const returnToIndex =  document.createElement("BUTTON")

    returnToIndex.onclick = () => {window.location = "/"}

    returnToIndex.innerText = "Voltar"

    nav.appendChild(returnToIndex)
    divNav.appendChild(nav)
    header.appendChild(divNav)
}

returnNav()

const form = document.querySelector("form")

form.addEventListener('submit', register)

async function register(e){
    e.preventDefault()

    const fData                =  new FormData(e.target)
    const formDataObj          =  {}
    fData.forEach((value, key) => (formDataObj[key] = value))
    console.log(formDataObj)
    
    await UserRequests.createUser(formDataObj)

    form.onsubmit = () => {window.location = "/"}
}