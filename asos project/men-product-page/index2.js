document.addEventListener('DOMContentLoaded', function() {
  const wishlistBtns = document.querySelectorAll('.Wishlist-btn');

  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Get product ID and other data
      const productId = btn.closest("li").querySelector("div[id]").id;
      const productName = btn.closest("li").querySelector("figcaption").textContent;
      const productPrice = btn.closest("li").querySelector("span").textContent;
      const productImg = btn.closest("li").querySelector("img").src;

      // Create an object to store product details including the image
      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        img: productImg, // Include image source in the product object
        quantity: 1
      };

      // Get existing wishlist items from local storage or initialize an empty array
      let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

      // Check if the product is already in the wishlist
      const existingProductIndex = wishlistItems.findIndex(item => item.id === productId);

      if (existingProductIndex === -1) {
        // If the product is not in the wishlist, add it
        wishlistItems.push(product);
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
        console.log("Product added to wishlist:", product);
      } else {
        console.log("Product already exists in the wishlist.");
      }
    });
  });
});
