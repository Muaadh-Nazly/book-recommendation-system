const start_btn= document.querySelector('#quizStart');
const Instruction = document.querySelector('.Instruction');
const platform = document.querySelector('.platform');
const scoreDisplay = document.querySelector('.score')

let nextBtn = document.getElementById("displayNext")
let correction = document.getElementById("Correction");
let score=0;

start_btn.onclick=() => {
    Instruction.classList.add('clear')
    platform.classList.add('active');
    nextBtn.innerHTML="Start";
}
nextBtn.onclick=() => {
    nextBtn.innerHTML="Next";
    firstQuestion();
    nextBtn.onclick=() => {
        secondQuestion();
        nextBtn.onclick=() => {
            thirdQuestion();
            nextBtn.onclick=() => {
                fourthQuestion();
                nextBtn.onclick=() => {
                    fifthQuestion();
                    platform.classList.remove('active')
                    scoreDisplay.classList.add('activeScore')
                    showScore();
                }
            }
        }
    }
}
function firstQuestion(){
    var firstQuestion=prompt("Who is the author of the famous horror novel series 'Goosebumps'?\n 1) Henry James\n 2) R.L.Stine\n 3) Joe Hill\n 4) Richardson Matheson")
    if(prompt)
    if(firstQuestion==2){
        correction.innerHTML="The answer was correct";
        score+=2;
    }else{
        correction.innerHTML="The answer was wrong. The correct answer is R.L.Stine";
        if(score>0){
            score-=1;
        }
    }
}
function secondQuestion(){
    var secondQuestion=prompt("What is the best selling book-series written by author J.K.Rowling?\n 1) Diary of Wimpy Kid\n 2)Perry Mason\n 3) Harry Potter\n 4) Hunger Games")
    if(secondQuestion==3){
        correction.innerHTML="The answer was correct";
        score+=2;
    }else{
        correction.innerHTML="The answer was wrong. The correct answer is Harry Potter";
        if(score>0){
            score-=1;
        }
    }
}

function thirdQuestion(){
    var thirdQuestion=prompt("Who is known to be the famous detective in Literature world?\n 1) Sherlock Holmes\n 2) Auguste Dupin\n 3) Nancy Drew\n 4) Hercule Poirot")
    if(thirdQuestion==1){
        correction.innerHTML="The answer was correct";
        score+=2;
    }else{
        correction.innerHTML="The answer was wrong. The correct answer is Sherlock Holmes";
        if(score>0){
            score-=1;
        }
    }
}
function fourthQuestion(){
    var fourthQuestion=prompt("What is the largest library in the world?\n 1) New York Public Library\n 2)Shanghai Library\n 3) Russian State Library\n 4) Library of Congress")
    if(fourthQuestion==4){
        correction.innerHTML="The answer was correct";
        score+=2;
    }else{
        correction.innerHTML="The answer was wrong. The correct answer is Library of Congress";
        if(score>0){
            score-=1;
        }
    }
}
function fifthQuestion(){
    var fifthQuestion=prompt("What is the most read novel genre?\n 1) Romance\n 2)Fiction\n 3) Mystery\n 4) Fantasy")
    if(fifthQuestion==1){
        correction.innerHTML="The answer was correct";
        score+=2;
    }else{
        correction.innerHTML="The answer was wrong. The correct answer is Romance";
        if(score>0){
            score-=1;
        }
    }
}

function showScore(){
    let badge = document.getElementById("badge");
    let remarkPlace=document.getElementById("remarks");
    if(score==10){
        badge.innerHTML="🥇"
        remarkPlace.textContent=`Congratulations! You received 10 points with a gold badge. Claim your points in your next purchase.`;
        alert("🥇\n`Congratulations! You received 10 points with a gold badge. Claim your points in your next purchase.`")
    }else if(score>=7){
        badge.innerHTML="🥈"
        remarkPlace.textContent=`Congratulations! You received ${score} points with a silver badge. Claim your points in your next purchase.`;
        alert(`🥈\nCongratulations! You received ${score} points with a silver badge. Claim your points in your next purchase.`)
    }else if(score>=4){
        badge.innerHTML="🥉"
        remarkPlace.textContent=`Congratulations! You received ${score} points with a bronze badge. Claim your points in your next purchase.`;
        alert(`🥉\nCongratulations! You received ${score} points with a bronze badge. Claim your points in your next purchase.`)
    }else{
        badge.innerHTML="☹️"
        remarkPlace.textContent=`You scored ${score} points out of 10. Better luck next time!`;
        alert(`☹️\nYou scored ${score} points out of 10. Better luck next time!`)
        
    }
}
