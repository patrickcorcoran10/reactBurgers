const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

const db = require('./models');


  
// Define API routes here
require("./routes/api-routes.js")(app);


// Send every other request (anything else) to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database and logging a message to the user upon success
// using db.sequelize.sync({force: true}).then(function() { will reset db every time.
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    console.log("We are ordering burgers on ", PORT, PORT);
});
});