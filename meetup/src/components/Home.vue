<template>
 <v-container>
     <v-layout row wrap class="mb-2">
         <v-flex xs12 sm6 class="text-xs-center text-sm-right">
             <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
         </v-flex>
         <v-flex xs12 sm6 class="text-xs-center text-sm-left">
             <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
         </v-flex>
     </v-layout>
     <v-layout row wrap class="mt-2">
         <v-flex xs12>
             <v-carousel>
                <v-carousel-item
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.imageUrl"
                >
                <div class="title">
                    {{ meetup.title }}
                </div>
                </v-carousel-item>
            </v-carousel>
         </v-flex>
     </v-layout>
      <v-layout row wrap class="mt-2">
         <v-flex xs12 class="text-xs-center">
             <p>Join our awesome meetups</p>
         </v-flex>
     </v-layout>
 </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl:
            "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
          id: "1",
          title: "Meetup in New York"
        },
        {
          imageUrl:
            "https://www.parisperfect.com/blog/wp-content/uploads/2018/05/The-Best-Places-to-Eat-Outside-in-Paris-by-Paris-Perfect3.jpg",
          id: "2",
          title: "Meetup in Paris"
        }
      ]
    };
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 60px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
  right: 0;
}
</style>


