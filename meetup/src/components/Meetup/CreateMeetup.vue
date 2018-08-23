<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="deep-orange--text">Create a new Meetup</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                required
                                id="title"
                                v-model="title"
                            >
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>    
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="location"
                                label="Location"
                                required
                                id="location"
                                v-model="location"
                            >
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>    
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="imageUrl"
                                label="Image URL"
                                required
                                id="image-url"
                                v-model="imageUrl"
                            >
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>    
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="150">
                        </v-flex>
                    </v-layout>

                    <v-layout row>    
                        <v-flex xs12 sm6 offset-sm3>
                            <v-textarea
                                name="description"
                                label="Description"
                                required
                                id="description"
                                v-model="description"
                            >
                            </v-textarea>
                        </v-flex>
                    </v-layout>

                    <v-layout row class="mb-3">
                        <v-flex xs12 sm6 offset-sm3>
                            <h2 class="deep-orange--text">Choose a Data & Time</h2>
                        </v-flex>
                    </v-layout>

                    <v-layout row class="mb-3">
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn 
                            class="deep-orange white--text" 
                            :disabled="!formIsValid"
                            type="submit"
                            >
                            Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: "",
      time: new Date()
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
        console.log(date);
      }
      return date;
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    }
  }
};
</script>
