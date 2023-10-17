// not sure why this function is returning an error code, but I ran out of time to work on this assignment in the current moment. 
// this is one of the ways we can use javascript to select all images by tag name which is 'im' in the HTML. We went over this in class so do not know why
// this is showing as "not a function"

function configureListeners() {
    let images = document.getElementsbyTagName('img')

     for (let i = 0; i < images.length; i++) { 
        images[i].addEventListener('mouseover', mouseOver)
        images[i].addEventListener('mouseout', mouseOut)
    } 
 }

function mouseOver(event) {
    this.querySelector("img").style.opacity = 0.5
    getProductInfo(event.target.id)// actually displays the text with price and color name for the specific image the mouse is over
}
// empty strings to display when the mouse is no longer over the image 
function mouseOut(event) {
this.querySelector("img").style.opacity = 1
      let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}
// creates the variables price and colorName under one function to get product info for an image
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            colorName = 'Lime Green' 
            price = '$14.99'
            updatePrice(colorName,price)          
            break;           
        case 'pn2':
            colorName = 'Medium Brown' 
            price = '$11.14'
            updatePrice(colorName,price) 
            break;            
        case 'pn3':
            colorName = 'Royal Blue' 
            price = '$22.99'
            updatePrice(colorName,price) 
            break;   
        case 'pn4':
            colorName = 'Solid Red' 
            price = '$13.42'
            updatePrice(colorName,price) 
            break;   
        case 'pn5':
            colorName = 'Solid White' 
            price = '$21.98'
            updatePrice(colorName,price) 
            break;   
        case 'pn6':
            colorName = 'Solid Black' 
            price = '$4.99'
            updatePrice(colorName,price) 
            break;   
        case 'pn7':
            colorName = 'Solid Cyan' 
            price = '$8.22'
            updatePrice(colorName,price) 
            break;   
        case 'pn8':
            colorName = 'Solid Purple' 
            price = '$11.99'
            updatePrice(colorName,price) 
            break;   
        case 'pn9':
            colorName = 'Solid Yellow' 
            price = '$14.99'
            updatePrice(colorName,price) 
            break;   
          default:              
    }
// function for defining price and colorName variables to display the text describing color names and prices for the panels/images/color blocks.

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementbyId('color-price')
        colorPrice.textContent = price// this defines price
 
        
        let color = document.getElementbyId('color-name')
        color.textContent = colorName // this defines colorName
    }
}
