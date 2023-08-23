const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

let score = JSON.parse(localStorage.getItem("score"));

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const scoreEl = document.getElementById("score");



if(!score)
{
    score=0;
}

if(score<0)
{
    score=0
}


const correctAns = num1 * num2 ;

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");



formEl.addEventListener("submit",()=>{

    const userAns = +inputEl.value;

    if(userAns === correctAns)
    {
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
    
})

scoreEl.innerHTML = `score: ${score}`;

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

