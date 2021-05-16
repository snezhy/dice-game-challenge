const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__filename, '../public'))

const app = express()

app.get('', (req, res) => {
    res.send('Hello express')
})

app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})

