if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

const uL = document.querySelector('[data-ul]');
var productElements = document.querySelectorAll('[data-elements]'); 

function ready() {
    let removeCartProductButtons = document.querySelectorAll('.remove');
    for(let i = 0; i < removeCartProductButtons.length; i++) {
        let buttons = removeCartProductButtons[i];
        buttons.preventDefault();
        buttons.addEventListener('click', removeProductItem);
    }
}

function removeProductItem(event) {
    let button = event.target;
    
    button.parentElement.remove()
    // button.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal();
}

var addToCartButtons = document.getElementsByClassName('add-button');
for(let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event) {
    var button = event.target;
    
    var buttonParent = button.parentElement;
    var nameE = buttonParent.querySelector(`.product-name`).innerText,
    priceE = buttonParent.querySelector(`.price`).innerText,
    imgE = buttonParent.querySelector(`.image`).src;

    addProductToCart(nameE, priceE, imgE);
}

function addProductToCart(name, price, imgSrc) {
    var cartLi = document.createElement('li');
    
    var cartProducts = uL;
    var cartProductsName = cartProducts.querySelectorAll('.p-name');
    for(let i = 0; i < cartProductsName.length; i++) {
        if(cartProductsName[i].innerText == name) {
            alert('This items already exists');
            return
        }
    }

    var cartLiContent = 
    `<div class="cart-product">
        <div class="img-name">
            <img src="${imgSrc}" alt="" width="50px" height="50px">
            <div class="p-name">${name}</div>
        </div>
        <div class="price-tag">${price}</div>
        <div class="quantity">
            <form action="" class="guantity-form">
                <label for="quantity-of">Quantity</label>
                <select name="quantity-of" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">4</option>
                    <option value="4">4</option>
                </select>
                <button class="remove">REMOVE</button>
            </form>
        </div>
    </div>`;

    cartLi.innerHTML = cartLiContent;
    uL.append(cartLi);
}