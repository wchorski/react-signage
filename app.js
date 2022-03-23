const express = require('express')
app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
})


app.use('/api/', require('./routes/hello-rut'))


// idk if this is even working because of React Frontend
// //! must go at the bottom of exp.get calls
app.use((req, res) => {
  res.status(404).render("404", "<h1>404</h1>")
})