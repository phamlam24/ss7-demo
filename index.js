const form = document.getElementById("form")

function checkAge(){
    const ageInput = document.getElementsByName("age")
    for(let i = 0;i<ageInput.length;i++){
        if(ageInput[i].checked){
            return ageInput[i].value
        }
    }
    return "no_value"
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        name: form.name.value.trim(),
        username: form.username.value.trim(),
        password: form.password.value.trim(),
        age: checkAge()
    }

    if(data.name === ""){
        const nameError = document.getElementById("name-error")
        nameError.innerHTML = "Name cannot be empty"
        nameError.style = "display: block"
    }
    else{
        const nameError = document.getElementById("name-error")
        nameError.innerHTML = ""
        nameError.style = "display: none"
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

    if(data.age === "no_value"){
        const ageError = document.getElementById("age-error")
        ageError.innerHTML = "Please choose your age group"
        ageError.style = "display: block"
    }
    else{
        const ageError = document.getElementById("age-error")
        ageError.innerHTML = ""
        ageError.style = "display: none"
    }

    if(data.name !== "" && data.username !== "" && data.age !== "no_value" && data.password !== ""){
        if(localStorage.getItem(data.username) == null){
            let accounts = JSON.stringify(data)
            localStorage.setItem(data.username,accounts)
            document.getElementById("signup-success").style = "display: block"
            setTimeout(()=>{
                window.location.href = "./login.html"
            },1000)
        }
        else{
            const usernameError = document.getElementById("username-error")
            usernameError.innerHTML = "Username already taken"
            usernameError.style = "display: block"
        }
        console.log(data)
    }
})