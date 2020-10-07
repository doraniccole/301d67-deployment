'use strict';
const { response } = require('express');
const express = require('express');
//pulls in the express object so we can use it's methods
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/user.data', (request, response) => {
    response.send('this worked!');
});

app.get('/', request, response) => {
    response.sendFile('/.public/index.html');

    app.get('/user-data', (request, response) => {
        response.json({ username: 'bnates', ps: 12345, location: seattle});
    });
}
//sets up my server to accept incoming traffic at a specific port
app.listen (PORT, () => {
    console.log(`listening on ${PORT}`);
});

