let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("orders");

orders.forEach((order, index) => {

    let items = "";

    order.items.forEach(product => {

        items += `
<div class="d-flex align-items-center mb-3">

    <img src="${product.image}"
         style="width:80px; height:80px; object-fit:cover; border-radius:10px;">

    <div class="ms-3">
        <h5>${product.name}</h5>
        <p>${product.price} EGP</p>
    </div>

</div>
`;

    });

    container.innerHTML +=`
        <div class="card mb-4">

            <div class="card-body">

                <h4>Order #${index + 1}</h4>

                <ul>
                    ${items}
                </ul>

                <h5>Total : ${order.total} EGP</h5>

                <button
                    class="btn btn-success"
                    onclick="completeOrder(${index})">

                    Completed

                </button>

            </div>

        </div>
    `;

});

function completeOrder(index) {

    orders.splice(index, 1);

    localStorage.setItem("orders", JSON.stringify(orders));

    location.reload();

}
