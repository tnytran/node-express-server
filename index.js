const express = require('express');
const app = express();

const SERVER_PORT = process.env.PORT || 3000;

//http://localhost:3000/
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>');
});

//http://localhost:3000/name
app.get('/name', (req,res) => {
    res.send('Yen');
});

//http://localhost:3000/course/web700
app.get('/course/web700', (req,res) => {
    res.send('WEB700 programming');
});

//Open about.html page:
app.get('/about', (req,res) => {
    // res.sendFile(__dirname + "/views/about.html");
    res.sendFile(`${__dirname}/views/about.html`);
});



//Start the server:
function onHttpStart() {
    console.log("Express http server listening on: " + SERVER_PORT);
}
app.listen(SERVER_PORT, onHttpStart);


// app.listen(SERVER_PORT, () => {
//     console.log(`Server is running at http://localhost:${SERVER_PORT}`);
// })