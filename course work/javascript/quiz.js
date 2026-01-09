const start_btn= document.querySelector('#quizStart');
const platform = document.querySelector('.platform');
const quit_btn= document.querySelector("#close-quiz-btn button");
const intro = document.querySelector('.Instruction');
const timeCount =platform.querySelector('.timer #timer');
const scoreDisplay =document.querySelector('.score');

const questionNumber= document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const closeBtn = document.getElementById("close-quiz-btn");

let currentQuestionIndex = 0;
let score = 0;
let counter;

// Starting the quiz
start_btn.onclick=() => {
    platform.classList.add("activePlatform");
    intro.classList.toggle("clearIntro");
    startTimer(15);
    startQuiz();
}

// Questions and Answers for the quiz
const questions=[
    {
        question:"Who is the author of the famous horror novel series 'Goosebumps'?",
        answers:[
            {text:"Henry James",correct:false},
            {text:"R.L. Stine",correct:true},
            {text:"Joe Hill",correct:false},
            {text:"Richardson Matheson",correct:false}
        
        ]
    },
    {
        question:"What is the best selling book-series written by author J.K.Rowling? ",
        answers:[
            {text:"Diary of Wimpy Kid",correct:false},
            {text:"Perry Mason",correct:false},
            {text:"Harry Potter",correct:true},
            {text:"Hunger Games",correct:false}
        
        ]
    },
    {
        question:"Who is known to be the famous detective in Literature world?",
        answers:[
            {text:"Sherlock Holmes",correct:true},
            {text:"Auguste Dupin",correct:false},
            {text:"Nancy Drew",correct:false},
            {text:"Hercule Poirot",correct:false}
        
        ]
    },
    {
        question:"What is the largest library in the world? ",
        answers:[
            {text:"New York Public Library",correct:false},
            {text:"Shanghai Library",correct:false},
            {text:"Russian State Library",correct:false},
            {text:"Library of Congress",correct:true}
        
        ]
    },
    {
        question:"What is the most read novel genre? ",
        answers:[
            {text:"Romance",correct:true},
            {text:"Fiction",correct:false},
            {text:"Mystery",correct:false},
            {text:"Fantasy",correct:false}
        
        ]
    }
];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML="Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionNumber.innerHTML = questionNo +". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("answers");
        answerBtn.appendChild(button);
        if (answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

// To reset the platform and remove the placeholder
function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
// check the answer
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct== "true";
    clearInterval(counter);
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score+=2;
    }else{
        selectedBtn.classList.add("incorrect");
        if (score>0){
        score--;
        }
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}

// displaying score platform
function showScore(){
    let badge = document.getElementById("badge");
    let remarkPlace=document.getElementById("remarks");
    resetState();
    platform.classList.remove('activePlatform');
    scoreDisplay.classList.add('activeScore');
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
    nextBtn.style.display="none";
    
    }

function nextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        startTimer(15);
        showQuestion();
    }else{
        showScore();
    }
}

// moving to next question
nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
        clearInterval(counter);
        nextButton();
})

function startTimer(time){
    counter =setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time<9){
            let addZero= timeCount.textContent;
            timeCount.textContent = "0"+addZero;
        }
        if(time<0){
            clearInterval(counter);
            nextButton();
        }
    }

}



