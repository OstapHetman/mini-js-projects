<template>
    <v-container>
        <v-layout row wrap v-if="loading">
         <v-flex xs12 class="text-xs-center">
             <v-progress-circular
                indeterminate
                color="deep-orange"
                :width="7"
                :size="70"
            ></v-progress-circular>
         </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="deep-orange--text">{{ meetup.title }}</h2>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-modal :meetup="meetup"></app-edit-modal>
                        </template> 
                    </v-card-title>
                    <v-card-media
                        :src="meetup.imageUrl"
                        height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
                        <div>
                            <app-edit-date-modal :meetup="meetup" v-if="userIsCreator">
                            </app-edit-date-modal>
                            <app-edit-time-modal :meetup="meetup" v-if="userIsCreator">
                            </app-edit-time-modal>
                        </div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <app-meetup-register-modal 
                        :meetupId="meetup.id"
                        v-if="userIsAuthenticated"
                        >
                        </app-meetup-register-modal>   
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    userIsCreator() {
      if (!this.userIsAuthenticated) {
        return false;
      }
      return this.$store.getters.user.id === this.meetup.creatorId;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

