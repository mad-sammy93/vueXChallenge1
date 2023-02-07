import { createStore } from "vuex";
import productsModule from './modules/products.js'

const store = createStore({
    modules: {
        prod: productsModule,
    }
});

export default store;