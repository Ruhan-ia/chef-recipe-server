const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000;

const chefProfile = require('./data/food.json')

app.use(cors())
app.get('/', (req, res)=>{
    res.send('foods are here')
})

app.get('/chef', (req, res)=>{
    res.send(chefProfile)
})

app.listen(port, ()=>{
    console.log(`foods are here on port: ${port}`)
})