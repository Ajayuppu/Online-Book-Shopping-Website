// WATCH OUT FOR SPELLING MISTAKES
// if you leave something in the middle of writing the program will not work at all
// WRITE CORRECT SYNTAX
//dont apply random div





if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready(){

    var removecartitembuttons = document.getElementsByClassName('btn-danger')
    console.log(removecartitembuttons)
    for(var i = 0 ; i < removecartitembuttons.length ; i++){
        var button = removecartitembuttons[i]
        button.addEventListener('click',removecartitem)
    }

    var quantityinput = document.getElementsByClassName('cart-quantity-input')
    for( var i = 0; i < quantityinput.length ; i++){
         var inputs = quantityinput[i]
         inputs.addEventListener('change',quantitychanged)
    }

    var addtocartbuttons = document.getElementsByClassName('btn-product')
    for ( var i=0 ; i < addtocartbuttons.length ; i++){
        var cartbuttons = addtocartbuttons[i]
        cartbuttons.addEventListener('click',addtocart)
        console.log('out fun')
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseclicked)

  // document.getElementsByClassName('burger')[0].addEventListener('click',navSlide)

         
    
      
    }
    

    


// function messageclicked(){
//     alert('Thank you for your valuable suggestion')
// }


// function navSlide (){
//     const burger=document.querySelector(".burger");
//     const nav=document.querySelector(".nav-links");
//     const navLinks=document.querySelectorAll(".nav-links li");

//     burger.addEventListener("click" ,()=>{
//         nav.classList.toggle ("nav-active");

//         navLinks.forEach((links,index)=>{
//          if(links.style.animation){
//              links.style.animation=""
//          }
//          else{
//             links.style.animation= `navLinksFade 0.5s ease forwards ${index/ 7+ 0.5}s `;
//          }
    
//         });
//         //burger animatiom
//         burger.classList.toggle("toggle");
//     });
     

  
// }




function purchaseclicked(){
    alert('Are you sure you want to continue to purchase')
    var cartitems = document.getElementsByClassName('cart-items')[0]
    while(cartitems.hasChildNodes()){
        cartitems.removeChild(cartitems.firstChild)
    }
    updatecarttotal()
}

function addtocart(event){
    // console.log('infun')
    var cartbutton = event.target
    var shopitem = cartbutton.parentElement
    var title = shopitem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopitem.getElementsByClassName('shop-item-price')[0].innerText
    var imagesrc = shopitem.getElementsByClassName('shop-item-image')[0].src
    console.log(title,price,imagesrc)
    console.log('in addtocart')
    additemtocart(title,price,imagesrc)
    updatecarttotal()


}

function additemtocart(title, price , imagesrc ){
    // var cartrow = document.createElement('div')
    // cartrow.innerText =title
    // var cartitems = cartrow.getElementsByClassName('cart-item')[0]
    // cartitems.append(cartrow)
        console.log('in additemtocart')
        var cartrow = document.createElement('div')
        cartrow.classList.add('cart-row')
        var cartitems = document.getElementsByClassName('cart-items')[0]
        var cartitemnames = cartitems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartitemnames.length; i++) {
            if (cartitemnames[i].innerText == title) {
                alert('This item is already added to the cart')
                return
            }
        }

        console.log('after for')
        var cartrowcontents = `
        
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imagesrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
        cartrow.innerHTML = cartrowcontents
        console.log('before append')
        cartitems.append(cartrow)
        cartrow.getElementsByClassName('btn-danger')[0].addEventListener('click', removecartitem)
        cartrow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantitychanged)


}

function quantitychanged(event){

    var input = event.target
    if ( isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatecarttotal()
}

function removecartitem(event){
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updatecarttotal()
}


function updatecarttotal(){
    var updatecartcontainer = document.getElementsByClassName('cart-items')[0]
    var cartrows = updatecartcontainer.getElementsByClassName('cart-row')
    var total = 0
        for( var i = 0;i < cartrows.length ; i++){
            cartrow = cartrows[i]
    var priceelement = cartrow.getElementsByClassName('cart-price')[0]
    // var cartquantity = cartrow.getElementsByClassName('cart-quantity')[0]not needed
    var valueelement = cartrow.getElementsByClassName('cart-quantity-input')[0]
   // console.log(priceelement,valueelement)
    var price = parseFloat(priceelement.innerText.replace('$',''))
    var quantity = valueelement.value
    total = total + (price * quantity)
}
    total = Math.round( total *100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText ='$' + total
}
