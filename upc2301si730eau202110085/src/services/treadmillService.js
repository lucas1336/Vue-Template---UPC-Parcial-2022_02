import axios from 'axios'

const base_url = 'http://localhost:3000/api/v1/treadmills'

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

  async getItemHC(id) {
    const response = await axios.get(`${base_url}/${id}/health-checks`)
    return response.data
  }
}
