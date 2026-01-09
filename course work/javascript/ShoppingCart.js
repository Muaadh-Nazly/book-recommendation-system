// DOM element which represents the container for cards
const card_container = document.querySelector('#card');
// DOM element which represents the alert or popup message
const pop_massage = document.querySelector('#alert');
// Get reference to the product item element using ID 'product_item'
const pd_item = document.querySelector('#product_item');
// Get the reference to the product preview title element using ID 'product_preview_title'
const product_preview_title = document.querySelector('#product_preview_title');
// Get the reference to the product paragraph element using ID 'product_para'
const product_para = document.querySelector('#product_para');
// Get the reference to the product price element using ID 'product_price'
const product_price = document.querySelector('#product_price');
// Get the reference to the product image element using ID 'product_image'
const product_image = document.querySelector('#product_image');
// Get the reference to the number of rates element using ID 'number_of_rates'
const number_of_rates = document.querySelector('#number_of_rates');
// Get the reference to the element using class 'rating'
let rating = document.querySelector('.rating');
// Get the reference to the element using class 'side_bar'
let side_bar = document.querySelector('.side_bar');
// Declare the variable to store index
let index_finder;
// Declare an empty array to the store cart items
let cart_array = [];
// Get the reference to the element using class 'Bill'
let bill_data = document.querySelector('.Bill');

const data = [
  {
    title: "Wooden Shelf",
    price: "150.00",
    desc: "Organize your book collection in style with this sturdy wooden bookshelf. With multiple shelves, it provides ample space for storing your favorite books, magazines, and literary treasures.",
    rt: 3,
    image: "../images/woodenbookshelf.webp"
  },

  {
    title: "Custom Bookmark",
    price: "20.00",
    desc: "Make your reading experience truly unique with this customizable bookmark. Personalize it with your name or initials engraved on the surface, adding a personal touch to your favorite books. ",
    rt: 4,
    image: "../images/custombookmark.webp"
  },

  {
    title: "Book Cart",
    price: "175.00",
    desc: "Effortlessly transport your books around your library or home with this practical wheeled book cart. Designed with convenience in mind, it features sturdy construction and ample storage space for books of all sizes.",
    rt: 3,
    image: "../images/librarybookcart.webp"
  },

  {
    title: "Book Strap",
    price: "40.00",
    desc: "Protect and secure your books during travel with this genuine leather strap. The adjustable design allows you to accommodate books of various sizes, ensuring a snug fit. Made from high-quality leather, it provides both durability and a touch of elegance.",
    rt: 5,
    image: "../images/bookstrap.webp"
  },

  {
    title: "Book Stand",
    price: "125.00",
    desc: "Read comfortably for hours with this adjustable book stand. Designed to hold your book open at the perfect angle, it eliminates the need for constantly propping it up with your hands. ",
    rt: 3,
    image: "../images/bookstand.webp"
  },

  {
    title: "Display Easel",
    price: "80.00",
    desc: "Showcase your favorite books or present new releases in style with this elegant easel-style book display. Its sophisticated design and sturdy construction provide a beautiful and practical way to highlight books in your home, office, or bookstore. ",
    rt: 4,
    image: "../images/bookdisplayeasel.webp"
  },

  {
    title: "Floating Shelf",
    price: "110.00",
    desc: "Create a mesmerizing display with this innovative floating bookshelf. Its clever design gives the illusion of books magically floating on your wall, adding a touch of whimsy and intrigue to your home decor.",
    rt: 5,
    image: "../images/floatingbookshelf.webp"
  },

  {
    title: "Wallmount Drack",
    price: "145.00",
    desc: "Maximize space and display your favorite books with this sleek wall-mounted book rack. Its minimalist design complements any interior decor, while the sturdy construction ensures stability and durability.",
    rt: 3,
    image: "../images/wallmountedrack.webp"

  },

  {
    title: "Classic Bookmark",
    price: "18.75",
    desc: "Enhance your reading experience with this stylish and durable bookmark featuring a classic design. Made from high-quality materials, this bookmark is built to last and adds a touch of sophistication to any book.",
    rt: 4,
    image: "../images/classicbookmark.webp"
  },

  {
    title: "Bookend Spair",
    price: "35.50",
    desc: "Keep your books neatly organized and add a decorative touch to your shelf with this pair of bookends. Crafted with attention to detail, they feature a stylish design that complements any decor style.",
    rt: 5,
    image: "../images/bookendspair.webp"
  },

  {
    title: "Magnetic Bookmark",
    price: "25.50",
    desc: ">Mark multiple pages in your books with this set of magnetic bookmarks. Each bookmark features a unique and eye-catching design, making it easy to find your place in different books or chapters. ",
    rt: 4,
    image: "../images/magneticbookmark.webp"
  },

  {
    title: "Flourish Bookmark",
    price: "22.75",
    desc: "Add a vibrant touch to your reading experience with this set of colorful bookmarks. Each bookmark features a unique design and vivid colors that bring joy and personality to your books.",
    rt: 3,
    image: "../images/colorfulbookmark.webp"
  }
]

// Loop through  items in the 'data' array using forEach and to provide the item and its index as an arguments
data.forEach((dt, index) => {
  // For each item, append the following HTML code for the 'card_container' element 
  card_container.innerHTML += `     
  <div class="card">
   <img class="img_card" src="${dt.image}" alt="${dt.image} + cart">
   <div class="detail_container">
       <h3 class="card_title"> ${dt.title}</h3>
       <h4 class="card_price">&pound; ${dt.price}</h4>
   </div>


   <button class="card_button" data-name="product1" onclick="handleBuy(${index}); index_finder = give_index(${index}); close_side_bar();">Buy Now</button>

</div>`;

})

// handling function closing the buy modal
const handleCloseBuy = () => {
  pop_massage.style.display = 'none'; // Hide the alert message
  pd_item.classList.remove('activated'); // This removes the 'activated' class from the product item
  rating.innerHTML = '';  // This clears the HTML contents of the 'rating' element


}
//HANDLING FUCTION TO the buy action for a specific item
const handleBuy = (arr_index) => {
  pop_massage.style.display = 'flex'; // This shows the alert message
  pd_item.classList.add('activated'); // This 'activated' class to the product item
 // This sets the product preview heading to the heading of the product at the specified index
  product_preview_title.innerHTML = data[arr_index].title;
 // This sets the product price to the price of the product at the specified index formatted as pounds
  product_price.innerHTML = `&pound;` + data[arr_index].price;
 // This sets the product paragraph to the description of the product at its specified index
  product_para.innerHTML = data[arr_index].desc;
 // Set the product image source to the image URL of the product at the specified index
  product_image.src = data[arr_index].image;

// Function to calculate rates and to display the rated stars based on the rate value
  let rates = Number(data[arr_index].rt)
  number_of_rates.innerHTML = '(' + (rates * 45) + ')';

  while (rates > 0) {
    rating.innerHTML += '<span class="fa fa-star checked"></span>';
    rates--;

  }

}

// This is function to display the side bar and its contents based on cart_array
const get_side_bar = (dk) => {
  side_bar.style.display = 'block';

  item_side_bar.innerHTML = '';
  

  cart_array.forEach((dk, index) => {
    // Purpose is to generate HTML elements for each item in the cart_array
    item_side_bar.innerHTML += `<div class='single_detail rm${index}'>
     <img src= ${dk.image} class='side_image'>
     <h3 class='side_book_title'>${dk.title}</h3>
     <div class="quantity">
     <form action="/action_page.php">
       <input type="number" id="quantity" name="quantity" min="1" max="999" value=${dk.quantity}
       class="quantity${index}" onchange="set_changed_val()">
     </form>
     </div>
     <button class="item_side_button" onclick="remove_from_cart(${index})";>Remove</button>
     </div>`;
  })

  // This is the function to calculate and display total price of items in the cart
  find_total_price();
}
// This is the function to close the side bar
const close_side_bar = () => {
  side_bar.style.display = 'none';
}


// This is the function to return the given index
function give_index(index) {
  return index;
}

// Initializing variables and elements
let item_side_bar = document.querySelector('#item_side_bar');
let arr_item_index = [];
let cart_item_count = 0;
let total_quantity = document.querySelector('.total_quantity');

// Function to add an item to the cart
function itemAdd() {
   // Checking if the item is already in the cart
  for (let a = 0; a < arr_item_index.length; a++) {
    if (index_finder == arr_item_index[a]) {
      window.alert('Item is already there in the cart !!!');
      return index_finder;
    }
  }
// To add the item to the cart and to update the cart's UI
  window.alert('Item has successfully addeed to cart !!!');
  cart_item_count += 1;
  arr_item_index.push(index_finder);
  total_quantity.innerHTML = String(cart_item_count);

  cart_array.push(
      {
       index:index_finder,
       image:data[index_finder].image, 
       title:data[index_finder].title, 
       quantity: 1, 
       price : data[index_finder].price
      }
       )
       
}

// To get the checkout form and displaying it
let check_button = document.querySelector('.checkout_form');
function get_checkout_form() {
  console.log(cart_array.length);
  
  bill_data.innerHTML = '';
  // To find and display the total price for all items in the cart
  let total_price = find_total_price();

  if(total_price == 0){
    window.alert(`Cart is Empty !!!, You can't Check out !!!`);
    return 0;
  }

  check_button.style.display = 'flex';

   // To generate HTML elements for each item in the cart_array for checkout form
  cart_array.forEach((dt, index_final)=>{
      bill_data.innerHTML += `<div class='final_bill rm_final${index_final}'>
     <img src= ${dt.image} class='side_image final_bill_image'>
     <h3 class='unit_price'>&pound;${dt['price']}</h3>
     <h3>${dt.quantity}</h3>
     <h3>&pound;${String(((dt.quantity * dt.price * 100) / 100).toFixed(2))}</h3>
     </div>`;
  })

}
// Function to close the checkout form and clear the error messages
function close_checkout_form(){
  formElements.forEach(element => {
    const {errorMsg } = element;
      errorMsg.innerHTML = "";
    
  });


  check_button.style.display = 'none';
  let side_bar = document.querySelector('.side_bar');
  side_bar.style.display = 'flex';
  


}




// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// This is the fuction to update the quantity of items in the cart_array and find the total price
function set_changed_val() {
  for (let i = 0; i < cart_array.length; i++) {
    let quantity_item = document.querySelector(`.quantity${i}`);
    if (quantity_item) {
      let a = quantity_item.value;
      cart_array[i].quantity = a;
    }
  }

  find_total_price();
}


// This is the function to calculate and to return the total price of all items in the cart
function find_total_price() {
  let total_price = 0;

  for (let j = 0; j < cart_array.length; j++) {
    if (cart_array[j]) {
      let item_price = (cart_array[j].quantity * parseFloat(cart_array[j].price)).toFixed(2);
      total_price = (parseFloat(total_price) + parseFloat(item_price)).toFixed(2);
    }
  }

   // Update the total price which displays in the UI
  let total_price_val = document.querySelector('.total_val');
  total_price_val.innerHTML = `Total: &pound;${total_price}`;

  let tot_bill_price = document.querySelector('.tot_bill_price');
  tot_bill_price.innerHTML = `Total Price: &pound;${total_price}`;

  return total_price;
}

// This is function to remove an item from the cart based on its index
function remove_from_cart(index) {
  let remove_item = document.querySelector(`.rm${index}`);
  remove_item.remove();

  let price_reduce = (cart_array[index].quantity * parseFloat(cart_array[index].price)).toFixed(2);
  delete cart_array[index];
  delete arr_item_index[index];

  // This the fuction to re-calculate total price and update cart item count
  cart_array.forEach((dt, index_final) => {
    if (dt) {
      bill_data.innerHTML += `<div class='final_bill rm_final${index_final}'>
        <img src= ${dt.image} class='side_image final_bill_image'>
        <h3 class='unit_price'>&pound;${dt.price}</h3>
        <h3>${dt.quantity}</h3>
        <h3>&pound;${((dt.quantity * dt.price * 100) / 100).toFixed(2)}</h3>
      </div>`;
    }
  });

  cart_item_count -= 1;
  let total_quantity = document.querySelector('.total_quantity');
  total_quantity.innerHTML = `${cart_item_count}`;

  find_total_price();
}

// This is the array which use to store email addresses
let emailArray = [];
// Function for the validation and store the email address in the emailArray
function ValidateEmail(){
  let emailGiven = document.querySelector('#email');
  emailArray.unshift(emailGiven.value);
}


// Array of form to elements and their respective error messages for validating
const formElements = [
  {
    input: document.querySelector('#first_name'),
    errorMsg: document.querySelector('#name_msg'),
    errorMsgText: 'Please enter your name!!!'
  },
  {
    input: document.querySelector('#email'),
    errorMsg: document.querySelector('#email_msg'),
    errorMsgText: 'Please enter your email!!!'
  },
  {
    input: document.querySelector('#address'),
    errorMsg: document.querySelector('#address_msg'),
    errorMsgText: 'Please enter your delivery address!!!'
  },
  {
    input: document.querySelector('#city'),
    errorMsg: document.querySelector('#city_msg'),
    errorMsgText: 'Please enter your delivery city!!!'
  },
  {
    input: document.querySelector('#zip'),
    errorMsg: document.querySelector('#zip_msg'),
    errorMsgText: 'Please enter your delivery zip code!!!'
  },
  {
    input: document.querySelector('#phone_number'),
    errorMsg: document.querySelector('#phone_msg'),
    errorMsgText: 'Please enter your phone number!!!'
  }
];

// This is the function to submit the form and perform validations
function SubmitForm() {

  let errorStat = false;

  formElements.forEach(element => {
    const { input, errorMsg, errorMsgText } = element;
    const value = input.value.trim();

     // This is the check if the input is empty, if yes, display the error message
    if (value === "") {
      errorMsg.innerHTML = errorMsgText;
      errorStat = true;
    } else {
      errorMsg.innerHTML = "";
    }
  });

   // For the validatation of the email address using a regular expression
  const emailInput = document.querySelector('#email');
  const emailErrorMsg = document.querySelector('#email_msg');
  const emailValue = emailInput.value.trim();

  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValidator.test(emailValue)) {
    emailErrorMsg.textContent = "Please enter a valid email address!!!";
    errorStat = true;
  }

  // Validating the item zipcode
  const zipInput = document.querySelector('#zip');
  const zipErrorMsg = document.querySelector('#zip_msg');
  const zip_value = zipInput.value.trim();

  const zipValidator = /^[\d+]\d+$/;
  if(!zipValidator.test(zip_value)){
    zipErrorMsg.textContent = "Please enter a valid zip code consisting only numbers";
    errorStat = true;
  }

    // Validating the phone number using a regular expression
  const phoneInput = document.querySelector('#phone_number');
  const phoneErrorMsg = document.querySelector('#phone_msg');
  const phoneValue = phoneInput.value.trim();

  const phoneValidator = /^[\d+]\d+$/;

  if (!phoneValidator.test(phoneValue) || phoneValue.length < 10) {
    phoneErrorMsg.textContent = "Please enter a valid phone number consisting of only numbers!!!";
    errorStat = true;
  }
  
  // Purpose if to display an alert if any errors are found in the form
  if(errorStat){
    window.alert('Please fill the form corretly to proceed the payment !!!');
  }else{
   // Hide the form and the sidebar and to display a confirmation message
    let deleteForm = document.querySelector('.checkout_form');
    deleteForm.style.display = 'none';
   
    let deleteSidebar = document.querySelector('.side_bar');
    deleteSidebar.style.display = 'none';

    let conformationMsg = document.querySelector('.conformatioMsg');
    conformationMsg.style.display = 'flex';
    
     // This is to create a message with the customer's name and ordered items
    const cusName = document.querySelector('#first_name');
    const requiredMassage = document.querySelector('.lastPop');
    requiredMassage.innerHTML = `Dear ${cusName.value}, you have ordered`;

    cart_array.forEach((dt, index)=>{
      if((cart_array.length - 1) != index){
        requiredMassage.innerHTML += ` ${dt.quantity} ${dt.title} at a cost of &pound;${dt.price} each and`;
      }else{
        requiredMassage.innerHTML += ` ${dt.quantity} ${dt.title} at a cost of &pound;${dt.price} .`;
      }
      
    })

        // This calculates and displays the total bill amount
    let totPrice = find_total_price();
    
    requiredMassage.innerHTML += `Your total bill is &pound;${totPrice}.`

 // To display the confirmation message as an alert
    window.alert(requiredMassage.innerHTML);

  }
}

// Option to close the order confirmation pop-up window and reload the page
function CloseProceedPopwindow(){
  let conformationMsg = document.querySelector('.conformatioMsg');
  conformationMsg.style.display = 'none';
  location.reload();
}

// Arrays to store font size values for card elements
let cardTitleFontSize = document.querySelector('.card_title');
console.log(cardTitleFontSize.inne);
let cardTitleArray = [];

// Initialize cardTitleArray with values from 15 to 40
for(let i = 15; i < 41; i++){
  cardTitleArray.push(i);
}

// Set CurrentCardPosition to 15 and to log the value at index 15 in cardTitleArray
let CurrentCardPosition = 15;
console.log(cardTitleArray[15]);

// To get the element with class 'card_price'
let cardPrice = document.querySelector('.card_price');
// Appends values from 10 to 24 to cardTitleArray
for(let y = 10; y < 25; y++){
  cardTitleArray.push(y);
}

// Set CurrentPricePosition to 25 and log its value at index 25 in cardTitleArray
let CurrentPricePosition = 25;
console.log(cardTitleArray[25]);

// This is the function to increase the font size of specified elements
function increaseFontSize(className, className2, className3) {
  const cardTitleElements = document.querySelectorAll(className);
    // For inreasing font size of elements with class className
  cardTitleElements.forEach((cardTitleElement) => {
    const fontSizeString = window.getComputedStyle(cardTitleElement).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize < 33) {
      fontSize++;
      cardTitleElement.style.fontSize = `${fontSize}px`;
    }
  });
// To increase font size of elements with class className2
  const cardPriceElements = document.querySelectorAll(className2);
  cardPriceElements.forEach((dt) => {
    const fontSizeString = window.getComputedStyle(dt).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize < 33) {
      fontSize++;
      dt.style.fontSize = `${fontSize}px`;
    }
  });

  // To increase font size of elements with class className3
  const BuyNow = document.querySelectorAll(className3);
  BuyNow.forEach((dt) => {
    const fontSizeString = window.getComputedStyle(dt).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize < 28) {
      fontSize++;
      dt.style.fontSize = `${fontSize}px`;
    }
  });

}

// The function to decrease the font size of particluar elements
function decreaseFontSize(className, className2, className3) {
  const cardTitleElements = document.querySelectorAll(className);
  
    // To the decreasement of the font size of elements with class className
  cardTitleElements.forEach((cardTitleElement) => {
    const fontSizeString = window.getComputedStyle(cardTitleElement).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize > 15) {
      fontSize--;
      cardTitleElement.style.fontSize = `${fontSize}px`;
    }
  });

  // To decrease font size of elements with class className2
  const cardPriceElements = document.querySelectorAll(className2);
  cardPriceElements.forEach((dt) => {
    const fontSizeString = window.getComputedStyle(dt).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize > 15) {
      fontSize--;
      dt.style.fontSize = `${fontSize}px`;
    }
  });

    // Decrease font size of the elements with class className3
  const BuyNow = document.querySelectorAll(className3);
  BuyNow.forEach((dt) => {
    const fontSizeString = window.getComputedStyle(dt).fontSize;
    let fontSize = parseInt(fontSizeString);
  
    if (fontSize > 15) {
      fontSize--;
      dt.style.fontSize = `${fontSize}px`;
    }
  });

}





