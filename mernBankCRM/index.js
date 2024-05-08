const express = require('express');
const path = require('path');
const app = express();

app.use('/home', express.static(path.join(__dirname, 'public', 'home')));
app.use('/dashboard',express.static(path.join(__dirname, 'public', 'dashboard')));
app.use('/relationships', express.static(path.join(__dirname, 'public', 'relationships')));
app.use('/advising', express.static(path.join(__dirname, 'public', 'advising')));
app.use('/productCreation', express.static(path.join(__dirname, 'public', 'productCreation')));


app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home','home.html'));
});

app.get('/dashboard/dash_home.html', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard','dash_home.html'));
});

app.get('/relationships/rel_home.html', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'relationships', 'rel_home.html'));
});

app.get('/advising/advis_home.html', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'advising','advis_home.html'));
});

app.get('/productCreation/pc_home.html', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'productCreation','pc_home.html'));
});

app.listen(8080, () => {
    console.log("Server successfully running on port 8080");
  });