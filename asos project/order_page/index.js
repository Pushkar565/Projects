document.addEventListener("DOMContentLoaded", function() {
  const cartList = document.getElementById("cartList");
  const totalPriceDisplay = document.getElementById("totalPrice");

  function renderCartItems() {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    cartList.innerHTML = ""; // Clear the existing list

    let totalPrice = 0; // Initialize total price

    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div>Product ID: ${item.id}</div>
          <div>Name: ${item.name}</div>
          <div>Price: ${item.price}</div>
          <div>Quantity: ${item.quantity}</div>
          <img style="width: 150px; height: 150xp;" src="${item.img}" alt="${item.name}"> 
          <button class="removeBtn" data-id="${item.id}">Remove</button>
          <hr>
        `;
        cartList.appendChild(li);

        // Calculate total price for each item and add to totalPrice
        totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;
      });
    } else {
      const emptyCartMessage = document.createElement("p");
      emptyCartMessage.textContent = "Your cart is empty.";
      cartList.appendChild(emptyCartMessage);
    }

    // Display the total price
    totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }

  // Initial render
  renderCartItems();

  // Event delegation for remove button clicks
  cartList.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeBtn")) {
      const productId = event.target.getAttribute("data-id");

      // Retrieve cart items from local storage
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Remove the item from cartItems array
      cartItems = cartItems.filter(item => item.id !== productId);

      // Update cartItems in local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Re-render the cart items list
      renderCartItems();
    }
  });
});
