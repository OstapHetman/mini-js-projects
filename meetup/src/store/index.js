import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
        id: "001",
        title: "Meetup in New York",
        date: new Date(),
        location: "New York",
        description: "It is New York"
      },
      {
        imageUrl:
          "https://www.parisperfect.com/blog/wp-content/uploads/2018/05/The-Best-Places-to-Eat-Outside-in-Paris-by-Paris-Perfect3.jpg",
        id: "002",
        title: "Meetup in Paris",
        date: new Date(),
        location: "Paris",
        description: "It is Paris"
      }
    ],
    user: {
      id: "0001",
      registeredMeetups: ["asdsadasd"]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "qJkskImxM"
      };
      // Reach out to firebase and store it
      commit("createMeetup", meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id == meetupId;
        });
      };
    }
  }
});
