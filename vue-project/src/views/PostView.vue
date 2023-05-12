<template>
  <div class="center-card">
    <h1 class="center">{{ post.title }}</h1>
    <img :src="post.photoUrl" alt="post.title" />
    <div class="content">
      <h3>{{ post.summary }}</h3>
      <p>{{ post.content }}</p>
    </div>
    <div class="footer">
      <Button disabled :label="'Likes: ' + post.likes"></Button>
      <Button
        label="Like"
        icon="pi pi-thumbs-up"
        class="margin-left"
        @click="this.addLike"
      ></Button>
    </div>
  </div>
</template>

<script>
import PostService from '../services/postService'
export default {
  name: 'PostView',
  data() {
    return {
      post: []
    }
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      PostService.getItem(this.$route.params.id)
        .then((response) => {
          this.post = response
        })
        .catch((e) => {
          console.log(e)
        })
    },
    addLike() {
      this.post.likes++
      PostService.updateItem(this.post.id, this.post)
        .then((response) => {
          console.log(response)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
img {
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 10px;
}
.center-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

.center {
  text-align: center;
  padding: 10px 10px;
}

.content,
.footer {
  padding: 5px 30px;
}

.footer {
  margin-bottom: 20px;
}

.margin-left {
  margin-left: 10px;
}
</style>
