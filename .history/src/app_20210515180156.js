const path = require('path')
const express = require('express')

console.log(__dirname)
const publicDir = path.join(__filename, '../public')

const app = express()

app.use(express.static(publicDir))

// app.get('', (req, res) => {
//     res.send('Hello express')
// })

app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})

