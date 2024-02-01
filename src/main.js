import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createApp(App).use(store).use(router).mount("#app");

export default db;
