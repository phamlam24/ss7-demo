const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        username: form.username.value.trim(),
        password: form.password.value.trim(),
    }

    if(data.username === ""){
        const usernameError = document.getElementById("username-error")
        usernameError.innerHTML = "Username cannot be empty"
        usernameError.style = "display: block"
    }
    else{
        const usernameError = document.getElementById("username-error")
        usernameError.innerHTML = ""
        usernameError.style = "display: none"
    }

    if(data.password === ""){
        const passwordError = document.getElementById("password-error")
        passwordError.innerHTML = "Password cannot be empty"
        passwordError.style = "display: block"
    }
    else{
        const passwordError = document.getElementById("password-error")
        passwordError.innerHTML = ""
        passwordError.style = "display: none"
    }

    if(data.username !== "" && data.password !== ""){
        if(localStorage.getItem(data.username) == null){
            const usernameError = document.getElementById("username-error")
            usernameError.innerHTML = "Username or password is incorrect"
            usernameError.style = "display: block"
            const passwordError = document.getElementById("password-error")
            passwordError.innerHTML = "Username or password is incorrect"
            passwordError.style = "display: block"
        }
        else{
            const userData = localStorage.getItem(data.username)
            if(JSON.parse(userData).password !== data.password){
                const usernameError = document.getElementById("username-error")
                usernameError.innerHTML = "Username or password is incorrect"
                usernameError.style = "display: block"
                const passwordError = document.getElementById("password-error")
                passwordError.innerHTML = "Username or password is incorrect"
                passwordError.style = "display: block"
            }
            else{
                const usernameError = document.getElementById("username-error")
                usernameError.innerHTML = ""
                usernameError.style = "display: none"
                const passwordError = document.getElementById("password-error")
                passwordError.innerHTML = ""
                passwordError.style = "display: none"
                localStorage.setItem("current_user", userData)
                document.getElementById("login-success").style = "display: block"
                setTimeout(()=>{
                    window.location.href = "./download.html"
                },1000)
            }
        }
        console.log(data)
    }
})