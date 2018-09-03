import Vue from "vue";
import App from "./App";
import * as firebase from "firebase";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { store } from "./store";
import DateFilter from "./filters/date";
import Alert from "./components/Shared/Alert";
import EditMeetupDialog from "./components/Meetup/Edit/EditMeetupDialog";
import EditMeetupDateDialog from "./components/Meetup/Edit/EditMeetupDateDialog";
import EditMeetupTimeDialog from "./components/Meetup/Edit/EditMeetupTimeDialog";
import RegisterDialog from "./components/Meetup/Registration/RegisterDialog";

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.filter("date", DateFilter);
Vue.component("app-alert", Alert);
Vue.component("app-edit-modal", EditMeetupDialog);
Vue.component("app-edit-date-modal", EditMeetupDateDialog);
Vue.component("app-edit-time-modal", EditMeetupTimeDialog);
Vue.component("app-meetup-register-modal", RegisterDialog);
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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
        this.$store.dispatch("fetchUserData");
      }
    });
    this.$store.dispatch("loadMeetups");
  }
});
