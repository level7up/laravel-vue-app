require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "Vue";
import router from './router'
import CompaniesIndex from './components/companies/CompaniesIndex'

createApp({
    components: {
        CompaniesIndex
    }
}).use(router).mount('#app')