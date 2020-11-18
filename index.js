// Modules

const express = require('express')
const axios = require('axios')


// create app
const app = express()

//create port
const PORT = process.env.PORT || 3000;


// create a route
app.get('/', (req, res) => {
    

    axios.get('https://api.github.com/users/tuanhrex')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})
app.get('/tuhoa', (req, res) => {
    

    axios.get('https://api.github.com/users/tuhoalyhuynh')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})
app.get('/edress', (req, res) => {
    

    axios.get('https://api.github.com/users/edgerees')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})
app.get('/jeremy', (req, res) => {
    

    axios.get('https://api.github.com/users/jjuriz')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})
app.get('/jenny', (req, res) => {
    

    axios.get('https://api.github.com/users/ruvvet')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})
app.get('/nitish', (req, res) => {
    

    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // console.log(response.data)
        const userObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(userObject)

        res.send(userObject)
    })
})



app.listen(PORT, () => {
    console.log (`Port: ${PORT}` )
})