const path = require('path')
const express = require('express')

const app = express()

const publicDir = path.join(__filename, '../public')


app.use(express.static(publicDir))

// app.get('', (req, res) => {
//     res.send('Hello express')
// })

app.listen(3000, () => { 
    console.log("Server is up on port 3000")
})

