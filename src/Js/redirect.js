export {redirectUser}

function redirectUser(){
    if (localStorage.getItem("@kenzie-blog:token") != undefined 
        && 
        localStorage.getItem("@kenzie-blog:user")  != undefined){
      return  window.location = "./userInterface.html"
    }
}

redirectUser()