let burger = document.querySelector(".hued")
let all = document.querySelector(".alltextc")
let head = document.querySelector("head-bar")
let a = false
let logo = document.querySelector(".logo")



burger.addEventListener ("click", function(){

    if (a == false){
        logo.style.display = "none"
        all.style.display = "flex"
        a = true
        all.style.flexDirection = "column"
        
        // head.style.flexDirection = "column"
        // head.style.padding = "0"

        
    }
    else {
        all.style.display = "none"
        a = false
        logo.style.display = "flex"
    }
})
