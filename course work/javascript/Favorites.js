function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      prefDetails(this);
    }
  };

  // xmlhttp.open("GET", "http://127.0.0.1:5500/course%20work/xml/Favorites.xml", true);
  xmlhttp.open("GET", "http://127.0.0.1:5500/xml/Favorites.xml", true);
  xmlhttp.send();
}

// function loadXMLDoc() {
//   // Create a new instance of XMLHttpRequest
//   var xmlhttp = new XMLHttpRequest();

//   // Define the callback function to handle the response
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       prefDetails(this);
//     }
//   };

//   // Specify the path to your XML file using the file:// protocol
//   var filePath = "file:///D:/IIT%20Docs/Semester%202/CM%201605%20Web%20Technology/Coursework/course%20work/xml/Favorites.xml";

//   // Open the XML file
//   xmlhttp.open("GET", filePath, true);

//   // Send the request
//   xmlhttp.send();
// }



function prefDetails(xml) {
var i;
var xmlDoc = xml.responseXML;
var cardsContainer = document.getElementById("card-container");
cardsContainer.innerHTML = "";
var x = xmlDoc.getElementsByTagName("item");

for (i = 0; i < x.length; i++) {
  var name = x[i].getElementsByTagName("name")[0]?.textContent;
  var price = x[i].getElementsByTagName("price")[0]?.textContent;
  var image = x[i].getElementsByTagName("image")[0]?.textContent;

  var card = document.createElement("div");
  card.className = "card";

  var img = document.createElement("img");
  img.src = image;
  img.alt = name;

  var cardContent = document.createElement("div");
  cardContent.className = "card-content";

  var productName = document.createElement("h3");
  productName.textContent = name;

  var productPrice = document.createElement("p");
  productPrice.textContent = price;

  cardContent.appendChild(productName);
  cardContent.appendChild(productPrice);

  card.appendChild(img);
  card.appendChild(cardContent);

  cardsContainer.appendChild(card);
}
}


document.getElementById("changeColorButton").addEventListener("click", changeBackground);
document.getElementById("changeTextButton").addEventListener("click", changeFontColor);

function changeFontColor() {
var txtcolorselect = document.getElementById('textedit')
var txtcolor = txtcolorselect.options[txtcolorselect.selectedIndex].value;

document.body.style.color = txtcolor;
}


function changeBackground() {
var colorSelect = document.getElementById("background");
var selectedTheme = colorSelect.options[colorSelect.selectedIndex].value;
if (selectedTheme == "black") {
  document.getElementById('customlabel').style.color = "white";
  document.body.style.backgroundColor = selectedTheme;
}
else if (selectedTheme == "white") {
  document.getElementById('customlabel').style.color = "black";
  document.body.style.backgroundColor = selectedTheme;
}
else if (selectedTheme == "#1f0630") {
  document.getElementById('customlabel').style.color = "white";
  document.body.style.backgroundColor = selectedTheme;
}
else if (selectedTheme == "themeX") {
  document.getElementById('customlabel').style.color = "white";
  document.getElementById('mainBody').style.backgroundImage = "url(../images/newlsetterbackground.webp)";
}
else if (selectedTheme == "themeY") {
  document.getElementById('customlabel').style.color = "white";
  document.getElementById('mainBody').style.backgroundImage = "url(../images/librarywallpaper.webp)";
}
}
