const express = require('express')
console.log(__dirname)
console.log(__filename)
const app = express()

app.get('', (req, res) => {
    res.send('Hello express')
})

app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})

