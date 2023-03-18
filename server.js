
const mongoose = require('mongoose');

const app = require('./app')
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  });


app.listen(3000, () => {
  console.log(`Server running. Use our API on port:${PORT}`)
})
