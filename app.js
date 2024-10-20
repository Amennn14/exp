const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

const activeHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.status(403).send('The page is closed come back from (Monday to Friday,  from 9 to 17)');
  }
 };
app.use(activeHours);



app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


app.listen(PORT, () => {
  console.log(`working on http://localhost:${PORT}`);
});