let numb=document.querySelector(".intake");
let random_num=Math.trunc(Math.random()*20)+ 1;
let check_btn=document.querySelector(".check");
let start=document.querySelector(".one");
let marks=document.querySelector(".score_num")
let hscore=document.querySelector(".high");
let reset=document.querySelector(".again");
let q_mark=document.querySelector(".qmark");
let scores=Number(20);
console.log("randomNumber",random_num)

function guessNumber(){

    let given_num=Number(numb.value) 
    console.log("guessNumber",given_num)

    if (given_num===random_num){
        start.textContent="Correct guess !";
        marks.textContent=scores;
        numb.value=""
        hscore.textContent=scores
        q_mark.textContent="W"
        document.querySelector("body").style.backgroundColor="green";
    }else if(given_num<random_num){
        console.log(scores);
        numb.value=""
        if (scores>0){
            start.textContent="too Low !";
            scores--;
            marks.textContent=scores
            q_mark.textContent=given_num
        }else{
            q_mark.textContent="L"
            start.textContent=`You lost the game, your score is ${scores}` ;
            document.querySelector("body").style.backgroundColor="red";
        }
    }

else{
    numb.value=""
    if (scores>0){
        start.textContent="too High!";
        scores--;
        marks.textContent=scores;
        q_mark.textContent=given_num
        }
        else{
            q_mark.textContent="L"
            start.textContent = `you Lost the Game ,your Score Is :${scores}`;
            document.querySelector("body").style.backgroundColor="red";}}
        }

    
function page(){

 document.querySelector("body").style.backgroundColor="rgb(46, 44, 44)";
 q_mark.textContent="?";
 start.textContent="Start guessing...";
 marks.textContent="20";
 hscore.textContent="0";
 numb.value="";
 random_num=Math.trunc(Math.random()*20)+ 1;
}

check_btn.addEventListener("click",guessNumber)
reset.addEventListener('click',page);
