const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

function createUser(req, resp) {
        let email = req.body.email
        let possword = req.body.password

        
}

app.use(cors())
app.use(express.json())

app.post('/api/user', createUser)

app.listen(
    port, 
    () => { console.log(`Listening on http:// localhost:${port}`)}
)