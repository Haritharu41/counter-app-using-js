let incBtn = document.querySelector(".incBtn");
let counter = 0;
let decBtn = document.querySelector(".decBtn");
let resetBtn=document.querySelector(".resetBtn");

incBtn.addEventListener("click", () => {
 increaseBnt();
})


function increaseBnt() {
    let num = document.querySelector(".number");
    counter += 1
    num.innerText = counter
}


decBtn.addEventListener("click", () => {
       decreaseBtn();
})


function decreaseBtn() {
    let num = document.querySelector(".number");
    counter -= 1
    num.innerText = counter
}

resetBtn.addEventListener("click",()=>{
    let num =document.querySelector(".number");
    num.innerText=0
})
