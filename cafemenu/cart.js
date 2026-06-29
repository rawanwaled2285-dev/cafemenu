let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML +=` 
<div class="card mb-4 shadow" style="width:350px; margin:auto;">

    <img src="${item.image}"
         class="card-img-top"
         style="height:220px; object-fit:cover;">

    <div class="card-body text-center">

        <h4>${item.name}</h4>

        <h5 class="text-success">${item.price} EGP</h5>

        <button class="btn btn-danger mt-3"
                onclick="removeItem(${index})">
            Delete
        </button>

    </div>

</div>
`;


});

document.getElementById("totalPrice").innerHTML = total;

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
function confirmOrder(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length==0){

alert("Cart is Empty");

return;

}

let total=0;

cart.forEach(item=>{

total += item.price;

});

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({

items:cart,

total:total,

status:"Preparing"

});

localStorage.setItem("orders",JSON.stringify(orders));

localStorage.removeItem("cart");

alert("Order Sent Successfully ✅");

window.location.href="menu.html";

}

