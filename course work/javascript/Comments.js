let rateComment="";
function ratedComment(){
    
    const stars=document.querySelectorAll('.rating input');
    stars.forEach((star,clickedIdx) => {
        star.addEventListener("click",() => {
            stars.forEach((otherStar,otherIdx)=>{
                if(otherIdx<=clickedIdx){
                    otherStar.classList.add("active");
                }
                else{
                    otherStar.classList.remove("active");
                }
            });
            let rateValue=clickedIdx +1;
            rateValue=String(rateValue)
            switch (rateValue){
                case "1":
                    return rateComment="Excellent";
                case "2":
                    return rateComment="Very Good";
                case "3":
                    return rateComment="Good";
                case "4":
                    return rateComment="Poor";
                case "5":
                    return rateComment="Very Poor";
                
            }
        });
    });
}

let validatedEmail=false;
function validateEmail() {
        let email =document.getElementById("email").value;
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!(email.match(emailFormat))) {
            window.alert("Email is not valid!.");
        }
        else{
            return validatedEmail=true;
        }
}
let inputs=false;
let usrName;
let comment;

function validateTextInputs(){
    usrName=document.getElementById("userName").value;
    comment=document.getElementById("comment").value;
    if(usrName==""){
        alert("Please enter a username");
    }
    if (comment=="Enter your comment here...." || comment==""){
        alert("Please enter a comment");
            }
    else{
        return usrName,comment, inputs=true;
        }

}
ratedComment();


document.getElementById("submit").onclick=function(){
    
    validateEmail();
    validateTextInputs();
    if((rateComment=="")){
        alert("Select a rating option")
    }else{
    if(validatedEmail==true && inputs==true){
            alert("Dear "+usrName+", Thank you very much for your feedback. You rated our site as "+rateComment+".\n"+"Your comment was "+comment+".");
    }
    }
}