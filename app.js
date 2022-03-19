const express = require('express')
app = express()

require('dotenv').config()
app.use('/api/', require('./routes/hello'))

const PORT = process.env.PORT || 3001

function getMedia (){
  // TODO get files
  // use fs & path to get files
  // put data into json
  // get component to push media
}

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})