import axios from "axios"

const baseURL = process.env.AW_API_BASE_URL

const http = axios.create({
  baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "Cache-Control":
      "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  },
})

export default http
