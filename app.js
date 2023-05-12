const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', '.handlebars');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
