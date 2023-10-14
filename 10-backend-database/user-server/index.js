const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const users = [
    {id: 1, name: 'Naim Ahmad', age: 20},
    {id: 2, name: 'Abis', age: 20},
    {id: 3, name: 'Ashik', age: 20},
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})


app.listen(port, ()=> console.log(`user server is running on port ${port}`))