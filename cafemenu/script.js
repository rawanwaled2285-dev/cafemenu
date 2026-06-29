let allProducts = [];

fetch("products.json")
  .then(response => response.json())
  .then(products => {
    allProducts = products;
  });

function showCategory(category) {

    let productsDiv = document.getElementById("products");
    productsDiv.innerHTML = "";

    let filtered = allProducts.filter(product => product.category === category);

    filtered.forEach(product => {

        let card = `
        <div class="col-md-3 mb-4">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top">

                <div class="card-body text-center">
                    <h5>${product.name}</h5>
                    <p>${product.price} EGP</p>

                    <button class="btn btn-warning w-100"
                    onclick='addToCart(${JSON.stringify(product)})'>
                     Add to Cart
                    </button>
                    
                </div>
            </div>
        </div>
        `;

        productsDiv.innerHTML += card;
    });
}
function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " Added to Cart");
}

