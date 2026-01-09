function nav_highliter() {
    let current_button = document.querySelector(".current_page");
    if(current_button != null){
        current_button.classList.remove("current_page");
    }
  
  }
  
function nav_back_highliter() {
    let current_button = document.querySelector(".hello");
    current_button.classList.add("current_page");
}
let navButton = document.querySelector(".hamburgerButton");
let navBar = document.querySelector(".nav_ul");

let activeState = false;

function nav() {
  activeState = !activeState;
  navBar.classList.toggle("active", activeState);
  navButton.classList.toggle("active", activeState);
}


let navLinks = document.querySelectorAll(".nav_ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav();
  });
});





  
