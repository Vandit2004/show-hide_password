let pass = document.querySelector("#pass")
let show = document.querySelector("#sh")
let hide = document.querySelector("#hi")
let para = document.querySelector("#para")
show.addEventListener("click",function(){
    para.innerHTML = pass.value
    alert("show the password")
})
hide.addEventListener("click",function(){
    alert("hide the password")
    para.innerHTML =" "
})
