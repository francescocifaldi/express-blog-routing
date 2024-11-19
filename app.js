console.log('terminale')

const express = require ('express')
const app = express()
const port = 3000
const posts = require('./posts')

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})