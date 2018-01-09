const express = require('express')
const app = express()

const uniqueId = ~~(Math.random() * 1000);

app.get('/', (req, res) => res.send('Hello World! My ID is ' + uniqueId))

app.listen(8000, () => console.log('Example app listening on port 8000!'))