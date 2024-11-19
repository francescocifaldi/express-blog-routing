console.log('terminale')

const express = require ('express')
const app = express()
const port = 3000
const posts = require('./posts')
const postsRouter = require('./routers/posts.js')

app.use(express.static('public'))
app.get('/', (req, res) => {
	res.send('root')
})

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})