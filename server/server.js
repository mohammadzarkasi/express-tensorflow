const express = require('express');
const path = require('path');

const app = express();


app.use((req, res, next) => {
    console.log(`${new Date()} - ${req.method} requesting ${req.url}`);
    next();
});

app.use(express.static('./static'));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'static', 'index.html'));
// });


var port = 10001;

app.listen(port, () => {
    console.log('server run at ' + port);
})