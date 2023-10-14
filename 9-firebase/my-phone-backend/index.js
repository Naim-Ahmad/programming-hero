const express = require('express')
const phones = require('./phone.json')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id
    const finedPhone = phones.find(phone => phone.id == id)
    if (finedPhone) {
        res.send(finedPhone)
    } else {
        res.send('No Data Found')
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port} port`)
})