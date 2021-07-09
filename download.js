const currentUser = localStorage.getItem("current_user")
if(currentUser == null){
    document.getElementById("nav-no-logged").style = "display: block"
    document.getElementById("no-logged").style = "display: flex"
}
else{
    const userData = JSON.parse(currentUser)
    document.getElementById("nav-logged").style = "display: flex"
    document.getElementById("hello-user").innerHTML = "Hello, " + userData.name
    document.getElementById("logged").style = "display: flex"
}