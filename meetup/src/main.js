import Vue from "vue";
import App from "./App";
import * as firebase from "firebase";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { store } from "./store";
import DateFilter from "./filters/date";
import Alert from "./components/Shared/Alert";

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", Alert);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyATkJ25380s4b5PeMipeNxNNAcYWTMuOqs",
      authDomain: "vuefs-dev-6560a.firebaseapp.com",
      databaseURL: "https://vuefs-dev-6560a.firebaseio.com",
      projectId: "vuefs-dev-6560a",
      storageBucket: "vuefs-dev-6560a.appspot.com",
      messagingSenderId: "331688615371"
    });
    this.$store.dispatch("loadMeetups");
  }
});
