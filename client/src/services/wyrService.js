// export default means this can be used in other files of our project
export default {
    getRandomWYR() {    // return a promise object
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}