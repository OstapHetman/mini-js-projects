<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="deep-orange--text">{{ meetup.title }}</h2> 
                    </v-card-title>
                    <v-card-media
                        :src="meetup.imageUrl"
                        height="400px"
                    ></v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date }} - Where it takes place</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae accusantium. Deserunt dolorum explicabo tempore amet provident eveniet dolorem reprehenderit eius, culpa consequuntur dicta dolore maxime nisi officiis nemo cum saepe facere nihil, quisquam velit ex ipsum necessitatibus rem? Temporibus ducimus quas nostrum ratione quis eius! Ullam dicta optio officiis. </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="deep-orange white--text">Register</v-btn>
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
    }
  }
};
</script>

