const express = require('express');
const app = express();

app.get((req, res, next, err) => {
    console.err(err.stack)
    res.status(500).send("something Broke!");
});

app.listen(3000)