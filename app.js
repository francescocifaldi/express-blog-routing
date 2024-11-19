console.log('terminale')

const express = require ('express')
const app = express()
const port = 3000
const posts = require('./posts')

app.use(express.static('public'))

//index
app.get('/posts/', (req, res) => {
    res.json(posts)
})

//show
app.get('/posts/:id', (req, res) => {
    res.json(posts[req.params.id])
})

//store
app.post('/posts/', (req, res) => {
    res.send(`Inserimento di un nuovo post`)
})

//update
app.put('/posts/:id', (req, res) => {
    res.send(`Aggiorno il post con id: ${req.params.id}`)
})

//modify
app.patch('/posts/:id', (req, res) => {
    res.send(`Modifico il post con id: ${req.params.id}`)
})

//destroy
app.delete('/posts/:id', (req, res) => {
    res.send(`Elimino il post con id: ${req.params.id}`)
})


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})