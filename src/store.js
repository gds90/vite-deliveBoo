import { reactive } from 'vue';

export const store = reactive({
    notificationItemName: null,
    baseUrl: 'http://127.0.0.1:8000',
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        // {
        //     name: 'login',
        //     label: 'Accedi'
        // },
        {
            name: 'contacts',
            label: 'Contatti'
        }
    ],
    cart: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
        restaurantId: null,
        restaurantSlug: localStorage.getItem('restaurantSlug') || null,
        restaurantName: localStorage.getItem('restaurantName') || null,
        totalPrice: 0
    },
    addToCart(item, restId, restSlug, restName) {

        if (this.cart.items.length === 0 || this.cart.restaurantId === null || this.cart.restaurantId === restId) {
            const existingItemIndex = this.cart.items.findIndex(i => i.id === item.id);
            if (existingItemIndex !== -1) {
                this.cart.items[existingItemIndex].quantity++;
            } else {
                this.cart.items.push({ ...item, quantity: 1 });
            }
            this.cart.restaurantId = restId;
            if (!this.cart.restaurantSlug) {
                this.cart.restaurantSlug = restSlug;
                localStorage.setItem('restaurantSlug', restSlug);
                this.cart.restaurantName = restName;
                localStorage.setItem('restaurantName', restName);
            }
            // assegna il nome del piatto alla variabile notificationItemName
            this.notificationItemName = item.name;

            setTimeout(() => {
                this.notificationItemName = null;
            }, 3000); // nascondi la notifica dopo 3 secondi

            localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
            this.calculateTotalPrice();
        } else {
            const errorMessage = `Puoi ordinare soltanto da un ristorante alla volta. Svuota il carrello o torna al ristorante in cui stavi ordinando.`;
            document.getElementById('errorMessage').innerText = errorMessage;
            document.getElementById('errorModal').style.display = 'block';
            // setTimeout(() => {
            //     document.getElementById('errorModal').style.display = 'none';
            // }, 5000);
        }

    },
    removeFromCart(item) {
        const existingItemIndex = this.cart.items.findIndex(i => i.id === item.id);
        if (existingItemIndex !== -1) {
            if (this.cart.items[existingItemIndex].quantity > 1) {
                this.cart.items[existingItemIndex].quantity--;
            } else {
                this.cart.items.splice(existingItemIndex, 1);
            }
            localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
            this.calculateTotalPrice();
        }
        if (this.cart.items.length === 0) {
            localStorage.removeItem('restaurantSlug');
            this.cart.restaurantSlug = null;
            localStorage.removeItem('restaurantName');
            this.cart.restaurantName = null;
        }
    },

    clearItemFromCart(index) {
        this.cart.items.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
        this.calculateTotalPrice();
        if (this.cart.items.length === 0) {
            localStorage.removeItem('restaurantSlug');
            this.cart.restaurantSlug = null;
            this.cart.restaurantName = null;
        }
    },
    clearCart() {
        this.cart.items = [];
        localStorage.removeItem('cartItems');
        localStorage.removeItem('restaurantSlug');
        localStorage.removeItem('restaurantName');
        this.cart.restaurantSlug = null;
        this.cart.totalPrice = 0;
    },
    calculateTotalPrice() {
        // calcola il totale sommando i prezzi di tutti gli articoli nel carrello
        const totalPrice = this.cart.items.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0);

        // Arrotonda il totale a due decimali e assegna il valore a this.totalPrice
        this.totalPrice = Math.round(totalPrice * 100) / 100;
    },
    closeModal() {
        document.getElementById('errorModal').style.display = 'none';
    },
    paymentFormSubmit() {
        let form = document.getElementById('paymentForm');
        form.submit();
    }
});