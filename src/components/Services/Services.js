import axios from 'axios'

export default class Services {
    constructor() {
        this.Api_Base = 'https://api.giphy.com/v1/gifs/';
        this.Api_Key = 'v3lBwUxSoBEQLSdV6OHcjIz0XapAgFoR'
    }
    getRecourse = (url) => {
        return axios.get(`${this.Api_Base}${url}`)
    }
    getSearch = (value, limit) => {
        return this.getRecourse(`search?api_key=${this.Api_Key}&q=${value}&${limit}`)
    }
    getTrending = (limit) => {
        return this.getRecourse(`trending?api_key=${this.Api_Key}&limit=${limit}`)
    }
}