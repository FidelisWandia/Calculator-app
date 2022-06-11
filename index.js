//Input field & button clicking
const inputEl = document.getElementById("input-el")

const buttons = document.querySelectorAll(".btn")

const equalBtn = document.querySelector(".equal-btn")

const clearBtn = document.querySelector(".clear-btn")


buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        let valueOfButton = e.target.dataset.num
        inputEl.value += valueOfButton
    })
})


equalBtn.addEventListener("click", function(){
    if(inputEl.value == ""){
        inputEl.value = "Please click some values"
    }else{
    let answer = eval(inputEl.value)
    inputEl.value = answer  
    }
    
})

clearBtn.addEventListener("click", function(){
    inputEl.value = ""
})


























