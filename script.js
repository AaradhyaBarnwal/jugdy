let input1 = document.querySelector('.int1');
let ques1 = document.querySelector('.ques1');
let Btn1 = document.querySelector('.btn1');
let p1 = document.querySelector('.p1');

Btn1.addEventListener('click',()=>{
    if (input1.value == 1) {
        p1.innerText = "Really 1am Do your parents know about this?";
    }if (input1.value== 2) {
        p1.innerText = "No words you really need to improve";
    } if(input1.value == 12) {
        p1.innerText = "Ohk sometimes it's fine but you can be better";
    }if(input1.value == 3){
        p1.innerText = "Are you okay should I call you?";
    }if (input1.value == 4) {
        p1.innerText = "You sure you are okay?";
    }if (input1.value == 5) {
        p1.innerText = "Typing error it must be a typing error by you";
    }
    console.log('3');
})