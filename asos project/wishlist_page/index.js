document.addEventListener("DOMContentLoaded", function() {
  const wishlistItemsList = document.getElementById("wishlist");

  // Retrieve wishlist items from local storage
  let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  // Function to render wishlist items
  function renderWishlistItems() {
    wishlistItemsList.innerHTML = ""; // Clear the existing list

    if (wishlistItems.length > 0) {
      wishlistItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div>Product ID: ${item.id}</div>
          <div>Name: ${item.name}</div>
          <div>Price: ${item.price}</div>
          <div>Quantity: ${item.quantity}</div>
          <img style="width: 150px; height: 150px;" src="${item.img}" alt="${item.name}">
          <button class="removeBtn" data-id="${item.id}">Remove from Wishlist</button>
          <hr>
        `;
        wishlistItemsList.appendChild(li);
      });
    } else {
      const emptyWishlistMessage = document.createElement("p");
      emptyWishlistMessage.textContent = "Your wishlist is empty.";
      wishlistItemsList.appendChild(emptyWishlistMessage);
    }
  }

  // Initial render of wishlist items
  renderWishlistItems();

  // Event listener for remove button clicks using event delegation
  wishlistItemsList.addEventListener("click", function(event) {
    if (event.target.classList.contains("removeBtn")) {
      const productId = event.target.getAttribute("data-id");

      // Remove the item from wishlistItems array
      wishlistItems = wishlistItems.filter(item => item.id !== productId);

      // Update wishlistItems in local storage
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));

      // Re-render the wishlist items list
      renderWishlistItems();
    }
  });
});
