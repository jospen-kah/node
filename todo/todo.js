const express = require('express');

const app = express();
const port = 3000;

const requestTime = ( req, res, next) =>{
    req.requestTime = Date.now();
}

app.use(requestTime)

app.get('/', (req, res) =>{
    let responseText = 'Hello world';
    responseText += `<small> Requested at : ${req.requestTime}</small>`
    res.send(responseText)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })