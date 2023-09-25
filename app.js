// My first code 

// const decrease = document.querySelector(".btn.decrease");
// const increase = document.querySelector(".btn.increase");
// const reset = document.querySelector(".btn.reset");
// const value = document.querySelector("#value");

// var counter = 0;

// decrease.addEventListener("click", function(){
//     counter--;
//     console.log(counter);
//     value.textContent = counter;
//     value.style.color = "red";
// })

// increase.addEventListener("click", function(){
//     counter++;
//     value.textContent = counter;
//     value.style.color = "green";
// })

// reset.addEventListener("click", function(){
//     counter = 0;
//     value.textContent = counter;
//     value.style.color = "#102a42";
// })



// solution code
let count  = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }
        if(style.contains('increase')){
            count++;
        }
        if(style.contains('reset')){
            count = 0;
        }

        if(count<0){
            value.style.color = "red";
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count === 0 ){
            value.style.color = "#222";
        }

        value.textContent = count;
    })
});
