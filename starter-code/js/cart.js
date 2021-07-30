/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.querySelector('tbody')
  tableBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  /// ------------------ querySelector ---------------------------///
  let tableBody = document.querySelector('tbody')
  // DONE: Iterate over the items in the cart
  for (let i=0; i<Cart.items.length; i++){
     // DONE: Create a TR
    let tableRowElem = document.createElement('tr');
    tableBody.appendChild(tableRowElem);
    // DONE: Create a TD for the delete link, quantity,  and the item
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    let tableDataElem = document.createElement('td');
    tableDataElem.textContent = Cart.items[i];
    tableRowElem.appendChild(tableDataElem);

    let tableDataElem = document.createElement('td');
    tableDataElem.textContent = 'delete link';
    tableRowElem.appendChild(tableDataElem);

    let tableDataElem = document.createElement('td');
    tableDataElem.textContent = Cart.items[i].quantity;
    tableRowElem.appendChild(tableDataElem);
  }
}

function removeItemFromCart(event) {
  let deleteLink = e.target.textContent;
  if (deleteLink === 'delete link') {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem();
  // DONE: Save the cart back to local storage
  saveToLocalStorage();
  // DONE: Re-draw the cart table
  renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
