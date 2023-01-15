const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/5sec', (req, res) => {
    setTimeout(() => {
        res.send('5 sec timeout')
    }, 5000);
})

app.listen(port, () => {
    console.log('Server Start');
})