<template>
  <section id="posts">
    <PostPreview v-for="post in posts" 
    :key="post.id"
    :title="post.title"
    :excerpt="post.previewText"
    :thumbnailImage="post.thumbnailUrl"
    :id="post.id"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          title: "Post One",
          previewText: "This is a post One",
          thumbnailUrl:
            "https://images.pexels.com/photos/953213/pexels-photo-953213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: "post-one"
        },
        {
          title: "Post Two",
          previewText: "This is a post Two",
          thumbnailUrl:
            "https://images.pexels.com/photos/953213/pexels-photo-953213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: "post-two"
        }
      ]
    };
  }
};
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
