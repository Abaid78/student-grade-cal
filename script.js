let web = document.getElementById("wb");
let math = document.getElementById("math");
let computer = document.getElementById("com");
let Physics = document.getElementById("ph");
let btn = document.getElementById("btn");
let result=document.getElementById("result");
let slid=document.querySelector(".slid");
let hrotation=90;
slid.style.transform=`rotate(${hrotation}deg)`;
btn.addEventListener("click", Percentage);
let percent;
let grade;
let passOrFail;

function Percentage() {
    const allSubValue = parseFloat(web.value)+parseFloat(Physics.value)+parseFloat(math.value)+parseFloat(computer.value);
    console.log(allSubValue);
    percent=(allSubValue/400)*100;
    percent=Math.fround(percent);
    if(percent>=80&&percent<=100){
       grade="A";
    }else if(percent>60 && percent <=80){
        grade="B";
    }
    else if(percent>=40&&percent<=60){
        grade="C";
    }else{
        passOrFail="Fail";
    }
    if(percent>=40){
        passOrFail="Pass";
    }else{
        passOrFail="Fail";
    }

    
    result.innerHTML=`Out of 400 your total is ${allSubValue} and percentage is ${percent} you are grade is ${grade}.Your are ${passOrFail}`
    
}