<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
            loading: false,
            errors: {}
        }
    },
    methods: {
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

            if (!this.email) {
                this.errors.email = ['Il campo E-mail è obbligatorio'];
            } else if (!this.validateEmail(this.email)) {
                this.errors.email = ['Il campo E-mail non è valido'];
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
    <div class="container">
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
                    <label for="email" class="control-label my-1"><strong>E-mail:</strong> </label>
                    <input type="text" id="email" v-model="email" class="form-control" placeholder="Inserisci la tua e-mail" :class="errors.email ? 'is-invalid' : ''" required/>
                    <div v-if="errors && errors.email" class="mt-1">
                        <p v-for="(error, index) in errors.email" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <label for="phone" class="control-label my-1"><strong>Telefono:</strong></label>
                    <input type="text" id="phone" v-model="phone" class="form-control" placeholder="Inserisci il tuo numero" :class="errors.phone ? 'is-invalid' : ''" required/>
                    <div v-if="errors && errors.phone">
                        <p v-for="(error, index) in errors.phone" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-12 my-3">
                    <label for="content" class="control-label my-1"><strong>Messaggio:</strong> </label>
                    <textarea name="content" id="content" rows="4" class="form-control" v-model="content" placeholder="Inserisci il tuo messaggio"  :class="errors.content ? 'is-invalid' : ''"  required></textarea>
                    <div v-if="errors && errors.content" class="mt-1">
                        <p v-for="(error, index) in errors.content" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <button  type="submit" class="btn btn-warning float-right" :disabled="loading">{{loading ? 'Invio in corso..' : 'Invia'}}</button>
                </div> 
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
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