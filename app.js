const express = require('express')
app = express()

//* ROUTES ######################################
getMedia_cntr = require('./controllers/getMedia-cntr')

require('dotenv').config()

//* WATCHER ######################################
const chokidar = require('chokidar')
const watcher = chokidar.watch('client/react-frontend/public/root', {
  persistent: true
})
watcher.on('ready', () => {
  console.log('[[ Chokidar is now WATCHING ]]')
})
watcher.on('add', path => {
  console.log(path, '[[ FILE ADDED ]]')
  getMedia_cntr.getMedia_cntr_funct
})
watcher.on('unlink', path => {
  console.log(path, '[[ FILE REMOVED ]]')
  getMedia_cntr.getMedia_cntr_funct
})
watcher.on('change', path => {
  // console.log(path, '[[ FILE CHANGED ]]')
  getMedia_cntr.getMedia_cntr_funct
})
//*  ######################################

// create a `.env` with a PORT=3001
const PORT = process.env.PORT || 3672
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})


app.use('/api/', require('./routes/hello-rut'))


// idk if this is even working because of React Frontend
// //! must go at the bottom of exp.get calls
app.use((req, res) => {
  res.status(404).render("404", "<h1>404</h1>")
})