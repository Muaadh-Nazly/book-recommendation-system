// Get the container for the product previews and all the preview elements inside it
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

// Add a click event listener to each element with the class 'gallery-item' inside the '.gallery' container
document.querySelectorAll('.gallery .gallery-item').forEach(products => {
  products.onclick = () => {
    // When a 'gallery-item' is clicked, display the 'products-preview' container
    preveiwContainer.style.display = 'flex';
    
    // Get the 'data-name' attribute of the clicked 'gallery-item'
    let name = products.getAttribute('data-name');
    
    // Go through each 'preview' element inside the 'products-preview' container
    previewBox.forEach(preview => {
      // Get the 'data-target' attribute of the current 'preview' element
      let target = preview.getAttribute('data-target');
      
    //Check if the 'data-name' attribute of the clicked 'gallery-item' matches the 'data-target' attribute of the current 'preview' element
      if (name == target) {
        preview.classList.add('active'); //If so,'preview' element corresponds to the clicked 'gallery-item'
      }
    });
  };
});

// Add a click event listener to each 'close-button' element inside a 'preview' element
previewBox.forEach(close => {
  close.querySelector('.close-button').onclick = () => {
    // When the 'close-button' is clicked, remove the class 'active' from its parent 'preview' element
    close.classList.remove('active');
    
    // Hide the 'products-preview' container by setting its display style to 'none'
    preveiwContainer.style.display = 'none';
  };
});
