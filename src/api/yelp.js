import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vxVGbRdre1hqB82xPdsm5BF3NsKGy1SR9DYA8N_JFwFiUmjNpY0fheSmGWT3RQifgcKLj6pKF3XAmlWUvZOPRHyFN4GI6x-K_peHvGVwijm5NxjfQr7DixrST8GDX3Yx'
    }
})