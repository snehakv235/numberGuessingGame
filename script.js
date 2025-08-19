//step1 using dom we are accessing html elemnts
const input=document.getElementById('guessInput');
const guessBtn=document.getElementById('guessBtn');
const restartBtn=document.getElementById('restartBtn');
const messageDiv=document.getElementById('message');
const attemptSpan=document.getElementById('attempts');
const secret=document.getElementById('secret');


let secretNumber=Math.floor(Math.random()*100+1);//so using this it gives random secret number we dont need to create it
//formula= math.floor(math.random()*(max-min+1))+min
let attemptsLeft=5;

guessBtn.addEventListener("click",function(){
    const guess=Number(guessInput.value);
    message.classList.remove("d-none");
    if(!guess){
        
        message.textContent="no number entered!";
    }else if (guess===secretNumber){
       message.textContent="correctNumber!";
        document.body.style.backgroundColor="teal";
        // const party=
        // document.createElement("div");
        // party.innerHTML=""
        secret.textContent=secretNumber;
       attempts.textContent="you won!";
       restartBtn.classList.remove("d-none");
        }
        else{
            attemptsLeft--;//decreasing attempts
            if(attemptsLeft>0){//still have chances left
          message.textContent=guess>secretNumber?"very high":"very low";
          attempts.textContent=`attempts left${attemptsLeft}`;

            }else{
                message.textContent="Game over no more attempts!";
                attempts.textContent="no attempts left";
                guessBtn.disabled=true;//disable the further guessing
                restartBtn.classList.remove("d-none");

            }
        }
});
restartBtn.addEventListener("click",function(){
     secretNumber=Math.floor(Math.random()*10+1);
     input.value="";//its clear the input section
     message.textContent="";//clears the message area
     message.classList.remove("text-success","fw-bold","fs-3");//removes the spl styling after win
     attempts=5;
     attempts.textContent="attemptsLeft:5";//reset the number of attempts
     document.body.style.backgroundColor="#f8f9fa";//reset background
     secret.textContent="?";//this hides previous secret number
     guessBtn.disabled=false;//enable the guess button
     message.classList.add("d-none");//hides again after restarting
     restartBtn.classList.add("d-none");




});