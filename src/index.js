const express = require("express");
const routes = require('./routes');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

app.use(routes);



app.listen(8081, function() {
    console.log("servidor Mouches OK")
})