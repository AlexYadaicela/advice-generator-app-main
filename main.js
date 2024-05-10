const h1 = document.querySelector("h1"); 
const para = document.querySelector("p"); 
const generateAdvice = document.querySelector("button"); 

async function populate(){
    const requestURL = "https://api.adviceslip.com/advice"; 
    const request = new Request(requestURL);

    const response = await fetch(request); 
    const adviceSlip = await response.json(); 

    populateAdviceSlip(adviceSlip); 
}

function populateAdviceSlip(obj){
    const slip = obj.slip;  
    h1.textContent = `ADVICE #${slip.id}`; 
    para.textContent = slip.advice; 
}

generateAdvice.onclick = () => {
    populate(); 
}

generateAdvice.ontouchstart = () =>{
    populate(); 
}