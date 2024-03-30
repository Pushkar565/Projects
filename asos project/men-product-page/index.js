
const cartBtns = document.querySelectorAll(".cart-btn");

function cartBtnUpdate() {
  cartBtns.forEach(btn => {
    btn.addEventListener("click", function() {
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

      // Get existing cart items from local storage or initialize an empty array
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Check if the product is already in the cart
      const existingProductIndex = cartItems.findIndex(item => item.id === productId);

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        cartItems[existingProductIndex].quantity++;
      } else {
        // If the product is not in the cart, add it with quantity 1
        cartItems.push(product);
      }

      // Store updated cart items back in local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      console.log("Product added to cart:", product);
    });
  });
}

cartBtnUpdate(); // Call the function to initialize event listeners




