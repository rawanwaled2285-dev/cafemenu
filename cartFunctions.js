let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {

    fetch("products.json")
    .then(response => response.json())
    .then(products => {

        let product = products.find(item => item.id == id);
        console.log("ID =",id);
        console.log("product =",product);


        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " Added To Cart ✅");

    });

}