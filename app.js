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
  getMedia_cntr.getMedia_cntr_funct
  console.log(path, '[[ FILE ADDED ]]')
})
watcher.on('unlink', path => {
  getMedia_cntr.getMedia_cntr_funct
  console.log(path, '[[ FILE REMOVED ]]')
})
watcher.on('change', path => {
  getMedia_cntr.getMedia_cntr_funct
  console.log(path, '[[ FILE CHANGED ]]')
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