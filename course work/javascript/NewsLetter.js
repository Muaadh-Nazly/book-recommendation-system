// function ValidateEmail(input) {
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
//     if (input.value.match(validRegex)) {
//       alert("Valid email address!");
//       document.nlvalid.mail.focus();
//       return true;
  
//     } else {
//       alert("Invalid email address!");
//       document.nlvalid.mail.focus();
//       return false;

//     }
// }

let x = false;
let y = false;


function ValidateEmail(email) {

  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.nlform.mail)) 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return(x = true)
    // return (true)

  }else {
    alert("You have entered an invalid email address!");
    return (false)
  }
}

function ValidateName(name) {

  // var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
  // if (name.length > 0) {
  //   for (var i = 0; i < name.length; i++) {
  //     if (iChars.indexOf(name.charAt(i)) != -1) {
  //         alert ("Your name has special characters. \nThese are not allowed.\n Please remove them and try again.");
  //         return false;
  //     }
  // }
  //   return (true)

  if (/^[A-Za-z\s]*$/.test(name)) {
    return(y = true)
    // return (true)

  }else {
    alert("You have entered an invalid name!")
    return (false)

  }
}


//   var name = document.nlform.name.value;
//   var email = document.nlform.mail.value;
//   var message = document.nlform.message.value;
//   if (ValidateName(name) == true && ValidateName(name) == true && ValidateEmail(email) == true && ValidateEmail(email) == true) {
//     alert("Dear Anne, you have successfully submitted your details")
//   } 
// }

function TrueDetails() {
  if (x == true && y == true) {
    alert("Dear Anne, you have successfully subscribed for a personalized newsletter")
    return (true)
  }
}