const express = require('express');

const app = express();

const port = 5000;
app.get('/', (request, response) => {
    response.send('hi222');
});
app.listen(port, () => {
    console.log('Server started');
});
