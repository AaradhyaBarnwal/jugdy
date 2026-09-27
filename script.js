let input1 = document.querySelector('.int1');
let ques1 = document.querySelector('.ques1');
let Btn1 = document.querySelector('.btn1');
let p1 = document.querySelector('.p1');

let input2 = document.querySelector('.int2');
let ques2 = document.querySelector('.ques2');
let Btn2 = document.querySelector('.btn2');
let p2 = document.querySelector('.p2');

let input3 = document.querySelector('.int3');
let ques3 = document.querySelector('.ques3');
let Btn3 = document.querySelector('.btn3');
let p3 = document.querySelector('.p3');

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
    }if (input1.value == 6) {
        p1.innerText = "you sure you didn't wrote your wake up time by accident?"
    }if (input1.value == 8) {
        p1.innerText = "isn't that to early but it's okay"
    }if (input1.value == 9) {
        p1.innerText = "it's good"
    }if(input1.value == 11 ) {
        p1.innerText = "It's late";
    }if (input1.value == 10) {
        p1.innerText = "not good not bad";
    }
})


Btn2.addEventListener('click',() => {
let num = input2.value;
    if (input2.value == 1) {
        p2.innerText = "it's fine";
    }if (input2.value == 2) {
        p2.innerText = "normie spotted";
    }if (input2.value == 3) {
        p2.innerHTML = "not bad not good";
    }if (input2.value == 4) {
        p2.innerText = "Are you okay";
    }if (input2.value == 5) {
        p2.innerText = "No words";
    }if (num>5){
        p2.innerText = "Hello mental asylum, we have got someone you would love to meet";
    }
})

Btn3.addEventListener('click',()=>{
    if (input3.value == 1) {
        p3.innerText = "damnnnnnn";
    }if (input3.value == 2) {
        p3.innerText = "normal thingyyyy";
    }if (input3.value == 3) {
        p3.innerText = "you could do better";
    }if (input3.value == 4) {
        p3.innerText = "umm improve";
    }if (input3.value == 5) {
        p3.innerText = "no words";
    }if (input3.value>5) {
        p3.innerText = "I have the number of a real good psycologist and eye doctor.I will send it to you because you will need them";
    }
})