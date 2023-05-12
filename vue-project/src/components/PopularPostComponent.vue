<template>
  <div class="center">
    <h1>Popular Post</h1>
  </div>
  <div class="flex-box">
    <div v-for="post in posts" :key="post.id" class="card">
      <img :src="post.photoUrl" alt="post.title" />
      <h2>{{ post.title }}</h2>
    </div>
  </div>
</template>

<script>
import PostService from '../services/postService.js'
export default {
  name: 'PopularPostComponent',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getTopPosts()
  },
  methods: {
    getTopPosts() {
      PostService.getPopularPosts()
        .then((response) => {
          this.posts = response
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
img {
  width: 80%;
  height: auto;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 10px;
}
.card {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.center {
  text-align: center;
}
</style>
