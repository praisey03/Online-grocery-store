document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            addToCart(button);
        });
    });

    function addToCart(button) {
        const productElement = button.parentNode;
        const productName = productElement.querySelector('h2').textContent;
        const productPrice = parseInt(productElement.querySelector('p').textContent.split(':')[1].trim());
        const quantityElement = productElement.querySelector('.quantity span');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;

        // Storing product details in localStorage
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        let product = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
