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
        items: JSON.parse(localStorage.getItem('cartItems')) || []
    },
    addToCart(item, restId) {
        if (this.cart.items.length === 0 || this.cart.items.every(item => item.id === restId)) {
            const existingItemIndex = this.cart.items.findIndex(i => i.id === item.id);
            if (existingItemIndex !== -1) {
                this.cart.items[existingItemIndex].quantity++;
            } else {
                this.cart.items.push({ ...item, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
        } else {
            let error = document.getElementById('error');
            error.innerHTML = "Puoi ordinare soltanto da un ristorante alla volta";
            setTimeout(() => {
                error.innerHTML = '';
            }, 3000);
        }
    },
    removeFromCart(index) {
        this.cart.items.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cart.items));
    },
    clearCart() {
        this.cart.items = [];
        localStorage.removeItem('cartItems');
    },

});