const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working ');
});

app.get("/user", (req, res) => {
  res.json({
    name: "Rajkumar",
    referralCode: "Raj2690",
    donations: 5000,
  });
});


app.get('/leaderboard', (req, res) => {
  const leaderboard = [
    { name: 'Rajkumar', referral: 'Raj2690', donations: 5000 },
    { name: 'Mahesh', referral: 'Mahesh1234', donations: 4200 },
    { name: 'Amit', referral: 'AMI5678', donations: 3600 },
    { name: 'Suraj', referral: 'Su9876', donations: 3100 },
    { name: 'Ganesh', referral: 'Ganesh3344', donations: 2500 },
  ];

  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
