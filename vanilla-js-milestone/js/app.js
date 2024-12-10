document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalCart");
    const cartLink = document.getElementById("cartLink");
    const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
    const searchInput = document.querySelector(".navbar--search");
    const productList = document.querySelector(".products--list");
    const sortDropdown = document.getElementById("sort");
    const cartDisplay = document.querySelector(".modal-cart-content p");
    
    let cartItems = [];
    const products = [
      {
        id: 1,
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: "$64",
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      },
      {
        id: 2,
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: "$109",
        description: "Easy upgrade for faster boot up, shutdown, application load and response... Boosts burst write performance...",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      },
      // Add more products here...
    ];
  
    // Modal open and close
    cartLink.onclick = function () {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
    };
  
    closeBtn.onclick = function () {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";
        }, 300);
      }
    };
  
    // Function to generate product elements
    function generateProductElements() {
      const productsList = document.querySelector(".products--list");
      productsList.innerHTML = ""; // Clear existing products
  
      products.forEach((product) => {
        const productElement = document.createElement("li");
        productElement.classList.add("product", "card");
  
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product--image" />
          <div class="product--text">
            <h1 class="product--name">${product.name}</h1>
            <p class="product--description">${product.description}</p>
            <button class="product--buy">Buy Now</button>
            <p class="product--price">${product.price}</p>
          </div>
        `;
        productsList.appendChild(productElement);
      });
    }
  
    // Call generateProductElements when the DOM is fully loaded
    generateProductElements();
  
    // Sorting functionality
    sortDropdown.addEventListener("change", () => {
      const sortOrder = sortDropdown.value;
      const sortedProducts = [...products].sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        
        if (sortOrder === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
  
      // Update the products list after sorting
      products.length = 0;
      products.push(...sortedProducts);
      generateProductElements();
    });
  
    // Cart functionality
    const addToCartButtons = document.querySelectorAll(".product--buy");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.closest(".product.card");
        const productName = product.querySelector(".product--name").textContent;
        const productPrice = product.querySelector(".product--price").textContent;
  
        cartItems.push({
          name: productName,
          price: productPrice,
        });
  
        displayConfirmation(productName);
        updateCartDisplay();
        openCartModal();
      });
    });
  
    function openCartModal() {
      modal.style.display = "block";
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
      updateCartDisplay();
    }
  
    function closeCartModal() {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  
    function updateCartDisplay() {
      if (cartItems.length === 0) {
        cartDisplay.textContent = "Your cart is empty.";
      } else {
        cartDisplay.innerHTML =
          "<ul>" +
          cartItems
            .map((item) => `<li>${item.name} - ${item.price}</li>`)
            .join("") +
          "</ul>";
      }
    }
  
    function displayConfirmation(productName) {
      const confirmation = document.createElement("div");
      confirmation.className = "confirmation-message";
      confirmation.textContent = `${productName} has been added to the cart.`;
      document.body.appendChild(confirmation);
  
      setTimeout(() => {
        confirmation.remove();
      }, 3000);
    }
  
    // Search functionality
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const products = Array.from(productList.children);
      products.forEach((product) => {
        const productName = product
          .querySelector(".product--name")
          .textContent.toLowerCase();
        if (productName.includes(query)) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
  