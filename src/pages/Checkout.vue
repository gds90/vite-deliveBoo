<script>
import PaymentCard from '../components/PaymentCard.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    components: {
        PaymentCard
    },
    data() {
        return {
            store,
            name: '',
            surname: '',
            address: '',
            phone: '',
            content: '',
            loading: false,
            errors: {}
        }
    },
    methods: {
        getRestaurantSlugFromLocalStorage() {
            // Controlla se restaurantSlug è presente in localStorage
            if (localStorage.getItem('restaurantSlug')) {
                // Restituisci restaurantSlug presente in localStorage
                return localStorage.getItem('restaurantSlug');
            } else {
                // Se restaurantSlug non è presente in localStorage, gestisci il caso di default
                return 'defaultRestaurantSlug';
            }
        },
        SendForm() {
            // reset errori
            this.errors = {};

            // validazione campi form
            if (!this.name) {
                this.errors.name = ['Il campo Nome è obbligatorio'];
            }

            if (!this.surname) {
                this.errors.surname = ['Il campo Cognome è obbligatorio'];
            }

            if (!this.address) {
                this.errors.address = ['Il campo Indirizzo è obbligatorio'];
            }

            if (!this.phone) {
                this.errors.phone = ['Il campo Telefono è obbligatorio'];
            } else if (!this.validatePhone(this.phone)) {
                this.errors.phone = ['Il campo Telefono non è valido'];
            }

            if (!this.content) {
                this.errors.content = ['Il campo Messaggio è obbligatorio'];
            }

            // se ci sono errori  ritorna senza inviare il form
            if (Object.keys(this.errors).length > 0) {
                return;
            }
            this.loading = true;

            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data)
                .then(response => {
                    if (response.data.success) {
                        // svuoto i campi della form
                        this.name = '';
                        this.surname = '';
                        this.email = '';
                        this.phone = '';
                        this.content = '';

                        // redirect pagina Thank-you
                        this.$router.push('/thank-you');
                    }
                }).catch(error => {
                    console.error('Error sending form:', error);
                    this.errors.server = ['Si è verificato un errore durante l\'invio del modulo. Si prega di riprovare più tardi.'];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        getClientToken() {
            axios.get(`${this.store.baseUrl}/api/payment/token`)
                .then(response => {
                    const clientToken = response.data.clientToken;
                    this.initializeBraintree(clientToken);
                })
                .catch(error => {
                    console.error('Error fetching client token:', error);
                });
        },
        validateEmail(email) {
            // email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validatePhone(phone) {
            // phone number validation
            const phoneRegex = /^[0-9]{10}$/;
            return phoneRegex.test(phone);
        }
    }
}
</script>
<template lang="">
<div class="container text-white">
    <div class="row">
        <div class="col-12 mt-5">
            <h1 class="font-1 text-warning ">Ci siamo quasi..</h1>
            <h2>Stai per completare il tuo ordine, compila i campi richiesti e invieremo il tuo ordine al ristorante.
            </h2>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 mt-5">
            <form @submit.prevent="SendForm()" method="post">
                <div class="row">
                    <div class="col-12 col-md-6 my-3">
                        <label for="surname" class="control-label my-1"><strong>Nome:</strong> </label>
                        <input type="text" id="name" v-model="name" class="form-control" placeholder="Inserisci il tuo nome" :class="errors.name ? 'is-invalid' : ''" required/>
                        <div v-if="errors && errors.name" class="mt-1">
                            <p v-for="(error, index) in errors.name" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 my-3">
                        <label for="surname" class="control-label my-1"><strong>Cognome:</strong> </label>
                        <input type="text" id="surname" v-model="surname" class="form-control" placeholder="Inserisci il tuo cognome" :class="errors.surname ? 'is-invalid' : ''"  required/>
                        <div v-if="errors && errors.surname" class="mt-1">
                            <p v-for="(error, index) in errors.surname" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="address" class="control-label my-1"><strong>Indirizzo:</strong> </label>
                        <input type="text" id="address" v-model="address" class="form-control" placeholder="Inserisci il tuo indirizzo" :class="errors.address ? 'is-invalid' : ''" required/>
                        <div v-if="errors && errors.address" class="mt-1">
                            <p v-for="(error, index) in errors.address" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="phone" class="control-label my-1"><strong>Telefono:</strong></label>
                        <input type="text" id="phone" v-model="phone" class="form-control" placeholder="Inserisci il tuo numero" :class="errors.phone ? 'is-invalid' : ''" required/>
                        <div v-if="errors && errors.phone">
                            <p v-for="(error, index) in errors.phone" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                        </div>
                    </div>
                    <!-- <div class="col-12 mt-5">
                        <button  type="submit" class="btn btn-warning float-right" :disabled="loading">{{loading ? 'Invio in corso..' : 'Invia'}}</button>
                    </div>  -->
                </div>
            </form>
            <div class="cart rounded-4 shadow bg-white p-3 mt-5">
                <h2 class="text-center fw-bold py-3">Riepilogo del tuo ordine:</h2>
                <!-- <div v-if="store.cart.items.length === 0" class="text-center p-3">
                    <span>Non ci sono articoli nel carrello!</span>

                </div> -->

                <table class="w-100 text-center" v-if="store.cart.items.length > 0">
                    <thead class="border-bottom">
                        <tr class="">
                            <th colspan="1" class="text-start">Articolo</th>
                            <th>Quantità</th>
                            <th>Prezzo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cartItem, index) in store.cart.items" :key="index">
                            <td colspan="1" class="text-start">
                                {{cartItem.name}}
                            </td>
                            <td>
                                {{cartItem.quantity}}
                            </td>
                            <td>&euro;{{ (cartItem.price * cartItem.quantity).toFixed(2) }}</td>
                        </tr>
                        
                        <tr class="">
                            
                            <td colspan="1" class="text-start fs-5 fw-bold ">Totale</td>
                            <td colspan="2" class="text-end fs-5"><b>&euro; {{ store.totalPrice }}</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div>
                <p class="mt-4 fs-5 m-auto ">Vuoi aggiungere altri piatti? Torna al <a class="text-decoration-none fw-semibold text-warning " :href="'http://localhost:5174/restaurants/' + getRestaurantSlugFromLocalStorage()">menù</a> del ristorante.</p>
                <button  class="btn btn-warning float-right" @click="this.getClientToken();">{{loading ? 'Invio in corso..' : 'Invia'}}</button>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <PaymentCard />
        </div>
    </div>
</div>
    <div>
    </div>
    <div class="container">
        
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.cart {
    color: $secondary_color;
}

.btn {
    background-color: rgb(245, 195, 68);
    border-radius: 5px;
    box-shadow: #fff 0px 4px 0px 0px;
    padding: 15px;
    background-repeat: no-repeat;
    cursor: pointer;
    box-sizing: border-box;
    width: 230px;
    height: 55px;
    color: #fff;
    border: none;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    overflow: hidden;

    &:hover {
        transform: scale(1.1)
    }
}

.btn::before {
    content: "";
    background-color: rgb(245, 173, 68);
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 700ms ease-in-out;
    display: inline-block;
}

/* .btn:hover::before {
    width: 100%;
}
*/
</style>