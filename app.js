const express = require('express')
app = express()

require('dotenv').config()
app.use('/api/', require('./routes/hello-rut'))

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})