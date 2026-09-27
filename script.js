let input1 = document.querySelectorAll('.int1');
let ques1 = document.querySelector('.ques1');
let Btn1 = document.querySelector('.btn1');

Btn1.addEventListener('click',()=>{
    if (input1.value == 1) {
        console.log('1');
    }else{
        console.log('2');
        console.log(input1.value);
    }
    console.log('3');
})