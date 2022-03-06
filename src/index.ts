import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(process.env.PORT||3000, () => {
    console.log('The application is listening on port 3000!');
})