<template>
  <div class="center">
    <h1>Our Post</h1>
  </div>
  <div class="flex-box">
    <div v-for="post in posts" :key="post.id" class="card">
      <h2>{{ post.title }}</h2>
      <router-link :to="'/post/' + post.id">
        <Button class="right">See More</Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import PostService from '../services/postService.js'
export default {
  name: 'OurPostComponent',
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.getRestPosts()
  },
  methods: {
    getRestPosts() {
      PostService.getRestPosts()
        .then((res) => {
          this.posts = res
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
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
  text-align: center;
}

.flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.center {
  text-align: center;
}

.right {
  background-color: #8e2de2;
  color: white;
  border: none;
  margin-left: 130%;
  margin-right: auto;
  display: block;
}
</style>
