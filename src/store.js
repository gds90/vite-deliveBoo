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
        totalPrice: 0
    },
    addToCart(item, restId) {
        if (this.cart.items.length === 0 || this.cart.restaurantId === null || this.cart.restaurantId === restId) {
            const existingItemIndex = this.cart.items.findIndex(i => i.id === item.id);
            if (existingItemIndex !== -1) {
                this.cart.items[existingItemIndex].quantity++;
            } else {
                this.cart.items.push({ ...item, quantity: 1 });
            }
            this.cart.restaurantId = restId;
            localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
            this.calculateTotalPrice();
        } else {
            let error = document.getElementById('error');
            error.innerHTML = "Puoi ordinare soltanto da un ristorante alla volta";
            setTimeout(() => {
                error.innerHTML = '';
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
    },

    clearItemFromCart(index) {
        this.cart.items.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
        this.calculateTotalPrice();
    },
    clearCart() {
        this.cart.items = [];
        localStorage.removeItem('cartItems');
        this.cart.totalPrice = 0;
    },
    calculateTotalPrice() {
        // calcola il totale sommando i prezzi di tutti gli articoli nel carrello
        this.totalPrice = this.cart.items.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0);
    }
});