const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

// in product.js, under the product model in category_id, need to referce the Category model id

// do I manually need to enter id to all fields in the different models