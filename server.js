// app.js
const express = require('express')
const clientService = require('./clientService')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Ready to listen to mq!'))

// Start the Express server
app.listen(3000, () => {
    console.log('Server running on port 3000!')
    clientService.start()
}
)