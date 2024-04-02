import { reactive } from 'vue';

export const store = reactive({
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
        // {
        //     name: 'contacts',
        //     label: 'Contatti'
        // }
    ],
    cart: {
        items: JSON.parse(localStorage.getItem('cartItems')) || [],
        restaurantId: null,
        restaurantSlug: localStorage.getItem('restaurantSlug') || null,
        totalPrice: 0
    },
    addToCart(item, restId, restSlug) {

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
            }
            localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
            this.calculateTotalPrice();
        } else {
            let error = document.getElementById('error');
            error.innerHTML = `Puoi ordinare soltanto da un ristorante alla volta. Svuota il carrello o torna al <a href="http://localhost:5174/restaurants/${this.cart.restaurantSlug}">ristorante</a> in cui stavi ordinando.`;
            error.classList.add('error-show');
            setTimeout(() => {
                error.innerHTML = '';
                error.classList.remove('error-show');
            }, 3000);
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
        }
    },

    clearItemFromCart(index) {
        this.cart.items.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
        this.calculateTotalPrice();
        if (this.cart.items.length === 0) {
            localStorage.removeItem('restaurantSlug');
            this.cart.restaurantSlug = null;

        }
    },
    clearCart() {
        this.cart.items = [];
        localStorage.removeItem('cartItems');
        localStorage.removeItem('restaurantSlug');
        this.cart.restaurantSlug = null;
        this.cart.totalPrice = 0;
    },
    calculateTotalPrice() {
        // calcola il totale sommando i prezzi di tutti gli articoli nel carrello
        this.totalPrice = this.cart.items.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0);
    }
});