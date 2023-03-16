
const signupForm = document.querySelector("#signup-form");
// const username = document.querySelector("#username")
const massege = document.querySelector(".messege")
const regEX = /^[a-zA-Z0-9]{8,12}$/

signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(signupForm.username.value)

    const inputVal = signupForm.username.value


    if(regEX.test(inputVal)) {
        massege.textContent = "Ma'lumot to'g'ri kiritildi 🙂"
        setTimeout(() => {
            massege.textContent = ' '
        }, 2000)
    } else {
        massege.textContent = "Kiritilyotgan ma'lumot 6 va 12 orasida bo'lishi kerak shuningdek  kichik va katta lotin harflaridan iborat bo'lishi zarur !"
        setTimeout(() => {
            massege.textContent = ' '
        }, 3000)
    }
})

// Live feedback
signupForm.username.addEventListener('keyup', (e) => {
    if (regEX.test(e.target.value)){
        signupForm.username.setAttribute('class', 'succes')
    } else {
        signupForm.username.setAttribute('class', 'error')
    }
})