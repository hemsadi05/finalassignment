document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const checkoutTotalPriceElement = document.getElementById('checkout-total-price');
    const checkoutForm = document.getElementById('checkout-form');
    const thankYouModal = document.getElementById('thank-you-modal');
    const deliveryDateElement = document.getElementById('delivery-date');
    const returnToShopButton = document.getElementById('return-to-shop');
    const paymentMethods = document.querySelectorAll('input[name="payment"]');

    // Load order from sessionStorage
    const currentOrder = JSON.parse(sessionStorage.getItem('checkoutOrder')) || {};

    // Initialize the page
    function init() {
        displayCheckoutItems();
        setupEventListeners();
    }

    // Display checkout items
    function displayCheckoutItems() {
        checkoutItemsContainer.innerHTML = '';
        let totalPrice = 0;

        for (const partId in currentOrder) {
            const item = currentOrder[partId];
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <div class="checkout-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="checkout-item-details">
                    <span class="checkout-item-name">${item.name}</span>
                    <span class="checkout-item-quantity">${item.quantity} x $${item.price.toFixed(2)}</span>
                </div>
                <span class="checkout-item-total">$${itemTotal.toFixed(2)}</span>
            `;
            
            checkoutItemsContainer.appendChild(itemElement);
        }

        checkoutTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Form submission
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Process payment (in a real app, this would connect to a payment processor)
            processPayment();
        });

        // Return to shop button
        returnToShopButton.addEventListener('click', function() {
            window.location.href = 'cparts.html';
        });

        // Payment method toggle
        paymentMethods.forEach(method => {
            method.addEventListener('change', function() {
                document.querySelectorAll('.payment-details').forEach(detail => {
                    detail.style.display = 'none';
                });
                
                const selectedDetails = document.getElementById(`${this.value}-details`);
                if (selectedDetails) {
                    selectedDetails.style.display = 'block';
                }
            });
        });
    }

    // Process payment and show thank you message
    function processPayment() {
        // Calculate delivery date (3-5 business days from now)
        const deliveryDate = new Date();
        const deliveryDays = 3 + Math.floor(Math.random() * 3); // Random 3-5 days
        deliveryDate.setDate(deliveryDate.getDate() + deliveryDays);
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        deliveryDateElement.textContent = `Your items will be delivered by ${deliveryDate.toLocaleDateString('en-US', options)}.`;
        
        // Show thank you modal
        thankYouModal.style.display = 'block';
        
        // Clear the order from storage
        sessionStorage.removeItem('checkoutOrder');
    }

    // Initialize the page
    init();
});