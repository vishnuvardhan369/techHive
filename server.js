const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views/about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views/contact.html')));

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  res.send(`Thanks ${name}, we got your message: "${message}"`);
});

app.get('/api/data', (req, res) => {
  res.json({ user: 'vishnu', msg: 'Welcome to TechHive!' });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
