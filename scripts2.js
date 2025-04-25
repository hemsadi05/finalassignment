document.addEventListener('DOMContentLoaded', function() {
    // Parts data with images
    const partsData = {
        processors: [
            { 
                id: 'p1', 
                name: 'Intel Core i9-13900K', 
                price: 589.99,
                image: 'photos/p1.jpg',
                description: '24 cores (8P+16E), up to 5.8GHz'
            },
            { 
                id: 'p2', 
                name: 'AMD Ryzen 9 7950X', 
                price: 699.99,
                image: 'photos/p2.jpg',
                description: '16 cores, up to 5.7GHz'
            },
            { 
                id: 'p4', 
                name: 'AMD Ryzen 7 7800X3D', 
                price: 449.99,
                image: 'photos/p4.jpg',
                description: '8 cores, up to 5.0GHz'
            },
            { 
                id: 'p3', 
                name: 'Intel Core i7-13700K', 
                price: 419.99,
                image: 'photos/p3.jpg',
                description: '16 cores, up to 5.4GHz'
            },
            { 
                id: 'p5', 
                name: 'Intel Core i5-13600K', 
                price: 319.99,
                image: 'photos/p5.jpg',
                description: '14 cores (6P+8E), up to 5.1GHz'
            },
            { 
                id: 'p6', 
                name: 'AMD Ryzen 5 7600X', 
                price: 249.99,
                image: 'photos/p6.jpg',
                description: '6 cores, up to 5.3GHz'
            }
        ],
        graphicCards: [
            { 
                id: 'g1', 
                name: 'NVIDIA RTX 4090', 
                price: 1599.99,
                image: 'photos/g1.jpg',
                description: '24GB GDDR6X'
            },
            { 
                id: 'g2', 
                name: 'AMD RX 7900 XTX', 
                price: 999.99,
                image: 'photos/g2.jpg',
                description: '24GB GDDR6'
            },
            { 
                id: 'g3', 
                name: 'NVIDIA RTX 4080', 
                price: 1199.99,
                image: 'photos/g3.jpg',
                description: '16GB GDDR6X'
            },
            { 
                id: 'g4', 
                name: 'AMD RX 7900 XT', 
                price: 899.99,
                image: 'photos/g4.jpg',
                description: '20GB GDDR6'
            },
            { 
                id: 'g5', 
                name: 'NVIDIA RTX 4070 Ti', 
                price: 799.99,
                image: 'photos/g5.jpg',
                description: '12GB GDDR6X'
            },
            { 
                id: 'g6', 
                name: 'AMD RX 7800 XT', 
                price: 499.99,
                image: 'photos/g6.jpg',
                description: '16GB GDDR6'
            }
        ],
        motherboards: [
            { 
                id: 'm1', 
                name: 'ASUS ROG Maximus Z790', 
                price: 699.99,
                image: 'photos/M1.jpg',
                description: 'Intel Z790, ATX'
            },
            { 
                id: 'm2', 
                name: 'Gigabyte X670E AORUS', 
                price: 499.99,
                image: 'photos/M2.jpg',
                description: 'AMD X670E, ATX'
            },
            { 
                id: 'm3', 
                name: 'MSI MPG B650 Carbon', 
                price: 279.99,
                image: 'photos/M3.jpg',
                description: 'AMD B650, ATX'
            },
            { 
                id: 'm4', 
                name: 'ASRock Z790 Taichi', 
                price: 499.99,
                image: 'photos/M4.jpg',
                description: 'Intel Z790, ATX'
            },
            { 
                id: 'm5', 
                name: 'ASUS TUF Gaming B550', 
                price: 169.99,
                image: 'photos/M5.jpg',
                description: 'AMD B550, ATX'
            },
            { 
                id: 'm6', 
                name: 'Gigabyte B660M DS3H', 
                price: 119.99,
                image: 'photos/M6.jpg',
                description: 'Intel B660, mATX'
            }
        ],
        memory: [
            { 
                id: 'r1', 
                name: 'Corsair Vengeance 32GB DDR5', 
                price: 129.99,
                image: 'photos/R1.jpg',
                description: 'DDR5 5600MHz'
            },
            { 
                id: 'r2', 
                name: 'G.Skill Trident Z 32GB DDR4', 
                price: 89.99,
                image: 'photos/R2.jpg',
                description: 'DDR4 3600MHz'
            },
            { 
                id: 'r3', 
                name: 'Kingston Fury 64GB DDR5', 
                price: 249.99,
                image: 'photos/R3.jpg',
                description: 'DDR5 5200MHz'
            },
            { 
                id: 'r4', 
                name: 'Crucial Ballistix 16GB DDR4', 
                price: 59.99,
                image: 'photos/R4.jpg',
                description: 'DDR4 3200MHz'
            }
        ],
        storage: [
            { 
                id: 's1', 
                name: 'Samsung 980 Pro 1TB NVMe', 
                price: 99.99,
                image: 'photos/S1.jpg',
                description: 'PCIe 4.0 NVMe SSD'
            },
            { 
                id: 's2', 
                name: 'WD Black SN850X 2TB', 
                price: 159.99,
                image: 'photos/S2.jpg',
                description: 'PCIe 4.0 NVMe SSD'
            },
            { 
                id: 's3', 
                name: 'Crucial MX500 1TB SATA', 
                price: 59.99,
                image: 'photos/S3.jpg',
                description: 'SATA III SSD'
            },
            { 
                id: 's4', 
                name: 'Seagate FireCuda 4TB HDD', 
                price: 129.99,
                image: 'photos/S4.jpg',
                description: '7200 RPM HDD'
            },
            { 
                id: 's5', 
                name: 'Sabrent Rocket 4 Plus 2TB', 
                price: 199.99,
                image: 'photos/S5.jpg',
                description: 'PCIe 4.0 NVMe SSD'
            },
            { 
                id: 's6', 
                name: 'Kingston NV2 1TB NVMe', 
                price: 49.99,
                image: 'photos/S6.jpg',
                description: 'PCIe 4.0 NVMe SSD'
            }
        ]
    };


    // Current order
    let currentOrder = {};

    // DOM elements
    const partsContainers = {
        processors: document.getElementById('processors'),
        graphicCards: document.getElementById('graphic-cards'),
        motherboards: document.getElementById('motherboards'),
        memory: document.getElementById('memory'),
        storage: document.getElementById('storage')
    };

    const orderTable = document.getElementById('order-items');
    const totalPriceElement = document.getElementById('total-price');
    const buyNowButton = document.getElementById('buy-now');
    const thankYouModal = document.getElementById('thank-you-modal');
    const returnToShopButton = document.getElementById('return-to-shop');
    const addToFavoritesButton = document.getElementById('add-to-favorites');
    const applyFavoritesButton = document.getElementById('apply-favorites');

    // Initialize the page
    function init() {
        renderParts();
        loadOrderFromLocalStorage();
        setupEventListeners();
    }

    // Render all parts in their respective sections
    function renderParts() {
        for (const category in partsData) {
            partsData[category].forEach(part => {
                const partElement = createPartElement(part, category);
                partsContainers[category].appendChild(partElement);
            });
        }
    }

    // Create HTML element for a part
    function createPartElement(part, category) {
        const partElement = document.createElement('div');
        partElement.className = 'part-item';
        partElement.dataset.id = part.id;
        partElement.dataset.category = category;

        partElement.innerHTML = `
            <img src="${part.image}" alt="${part.name}" class="part-image">
            <h4>${part.name}</h4>
            <p class="part-description">${part.description}</p>
            <p class="part-price">$${part.price.toFixed(2)}</p>
            <div class="quantity-controls">
                <button class="decrease-quantity">-</button>
                <input type="number" min="0" value="0" class="quantity-input">
                <button class="increase-quantity">+</button>
            </div>
        `;

        // Add event listeners for quantity controls
        const decreaseBtn = partElement.querySelector('.decrease-quantity');
        const increaseBtn = partElement.querySelector('.increase-quantity');
        const quantityInput = partElement.querySelector('.quantity-input');

        decreaseBtn.addEventListener('click', () => {
            const newValue = Math.max(0, parseInt(quantityInput.value) - 1);
            quantityInput.value = newValue;
            updateOrder(part.id, category, newValue);
        });

        increaseBtn.addEventListener('click', () => {
            const newValue = parseInt(quantityInput.value) + 1;
            quantityInput.value = newValue;
            updateOrder(part.id, category, newValue);
        });

        quantityInput.addEventListener('change', () => {
            const newValue = Math.max(0, parseInt(quantityInput.value) || 0);
            quantityInput.value = newValue;
            updateOrder(part.id, category, newValue);
        });

        return partElement;
    }

    // Update the current order when quantity changes
    function updateOrder(partId, category, quantity) {
        const part = partsData[category].find(p => p.id === partId);
        
        if (quantity > 0) {
            currentOrder[partId] = {
                name: part.name,
                price: part.price,
                quantity: quantity,
                category: category,
                description: part.description,
                image: part.image
            };
        } else {
            delete currentOrder[partId];
        }

        updateOrderSummary();
        saveOrderToLocalStorage();
    }

    // Update the order summary table
    function updateOrderSummary() {
        orderTable.innerHTML = '';
        let totalPrice = 0;

        for (const partId in currentOrder) {
            const item = currentOrder[partId];
            const row = document.createElement('tr');
            
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
            `;
            
            orderTable.appendChild(row);
        }

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Setup all event listeners
    function setupEventListeners() {
        // Buy Now button - redirects to checkout page
        buyNowButton.addEventListener('click', () => {
            if (Object.keys(currentOrder).length === 0) {
                alert('Please add items to your order before proceeding to checkout.');
                return;
            }
            
            // Save order to sessionStorage for checkout page
            sessionStorage.setItem('checkoutOrder', JSON.stringify(currentOrder));
            
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });

        // Return to shop button
        returnToShopButton.addEventListener('click', () => {
            thankYouModal.style.display = 'none';
        });

        // Add to favorites button
        addToFavoritesButton.addEventListener('click', () => {
            if (Object.keys(currentOrder).length === 0) {
                alert('Please add items to your order before saving as favorite.');
                return;
            }
            
            localStorage.setItem('favoriteOrder', JSON.stringify(currentOrder));
            alert('Order saved as favorite!');
        });

        // Apply favorites button
        applyFavoritesButton.addEventListener('click', () => {
            const favoriteOrder = JSON.parse(localStorage.getItem('favoriteOrder'));
            
            if (!favoriteOrder || Object.keys(favoriteOrder).length === 0) {
                alert('No favorite order found.');
                return;
            }
            
            // Clear current order and inputs first
            currentOrder = {};
            clearQuantityInputs();
            
            // Apply favorite order
            currentOrder = JSON.parse(JSON.stringify(favoriteOrder));
            
            // Update quantity inputs to match favorite order
            for (const partId in favoriteOrder) {
                const item = favoriteOrder[partId];
                const partElement = document.querySelector(`.part-item[data-id="${partId}"]`);
                
                if (partElement) {
                    const quantityInput = partElement.querySelector('.quantity-input');
                    quantityInput.value = item.quantity;
                }
            }
            
            updateOrderSummary();
            saveOrderToLocalStorage();
        });
    }

    // Clear all quantity inputs
    function clearQuantityInputs() {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            input.value = '0';
        });
    }

    // Save current order to localStorage
    function saveOrderToLocalStorage() {
        localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
    }

    // Load order from localStorage
    function loadOrderFromLocalStorage() {
        const savedOrder = JSON.parse(localStorage.getItem('currentOrder'));
        
        if (savedOrder) {
            currentOrder = savedOrder;
            
            // Update quantity inputs
            for (const partId in currentOrder) {
                const item = currentOrder[partId];
                const partElement = document.querySelector(`.part-item[data-id="${partId}"]`);
                
                if (partElement) {
                    const quantityInput = partElement.querySelector('.quantity-input');
                    quantityInput.value = item.quantity;
                }
            }
            
            updateOrderSummary();
        }
    }

    // Initialize the application
    init();
});