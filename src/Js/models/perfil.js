function returnNav(){
    const header = document.querySelector("header")

    const divNav = document.createElement("div")
    const nav    = document.createElement("NAV")

    const back =  document.createElement("BUTTON")
    back.classList.add("button")

    back.onclick = () => {window.location = "../pages/userInterface.html"}

    back.innerText = "Voltar"

    nav.appendChild(back)
    divNav.appendChild(nav)
    header.appendChild(divNav)
}

returnNav()