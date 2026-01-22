let text = document.querySelector("#text")
let para =document.querySelector("p")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let btn = document.querySelector("button")
btn.addEventListener("click",function(){
    if(text.value=="" || email.value=="" || pass.value==""){
        para.innerHTML = "Error ! Above any field is empty"
        para.style.color = "red"
    }
    else{
        para.innerHTML = ""
    }
})
