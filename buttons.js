function clearStorage(){
    localStorage.clear()
    alert("Cleared local storage")
}
function toLogin(){
    window.location.href = "./login.html"
}
function toRegister(){
    window.location.href = "./index.html"
}
function signOut(){
    localStorage.removeItem("current_user")
    window.location.href = "./login.html"
}