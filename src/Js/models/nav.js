export {unloggedNav, loggedNav}

function unloggedNav(){
    const header      = document.querySelector("header")

    const divNav      = document.createElement("div")
    const nav         = document.createElement("NAV")

    const login       =  document.createElement("BUTTON")
    const register    = document.createElement("BUTTON")

    const loginUrl    = "../src/pages/login.html"
    const registerUrl = "../src/pages/register.html"

    login.onclick = () => {window.location = loginUrl}
    register.onclick = () => {window.location = registerUrl}

    login.innerText = "login"
    register.innerText = "Registre-se"

    nav.appendChild(login)
    nav.appendChild(register)
    divNav.appendChild(nav)
    header.appendChild(divNav)
}

function loggedNav(){
    const header = document.querySelector("header")

    const divNav = document.createElement("div")
    const nav    = document.createElement("NAV")

    const perfil =  document.createElement("BUTTON")
    const logout =  document.createElement("BUTTON")

    const perfilUrl = "./perfil.html"

    perfil.onclick = () => {window.location = perfilUrl}
    logout.onclick = () => {
        localStorage.clear()
        window.location = "/"
    }

    perfil.innerText = "Perfil"
    logout.innerText = "Sair"

    nav.appendChild(perfil)
    nav.appendChild(logout)
    divNav.appendChild(nav)
    header.appendChild(divNav)
}