import axios from 'axios'

const base_url = 'http://localhost:3000/api/v1/posts'

export default {
  async getList() {
    const response = await axios.get(base_url)
    return response.data
  },

  async getItem(id) {
    const response = await axios.get(`${base_url}/${id}`)
    return response.data
  },

  async updateItem(id, data) {
    return await axios.put(`${base_url}/${id}`, data)
  },

  async getPopularPosts() {
    const response = await axios.get(base_url)
    const posts = response.data
    const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 3)
    return popularPosts
  },

  async getRestPosts() {
    const response = await axios.get(base_url)
    const posts = response.data
    const restPosts = posts.sort((a, b) => b.views - a.views).slice(3)
    return restPosts
  },

  async likePost(id) {
    post = await this.getPost(id)
    const response = await axios.put(`${base_url}/${id}`, {
      likes: post.likes + 1
    })
    return response.data
  }
}
