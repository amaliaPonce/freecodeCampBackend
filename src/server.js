import express from 'express';

const app = express();

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  let inputDate;
  if (date) {
    inputDate = new Date(date);
  } else {
    inputDate = new Date();
  }

  if (isNaN(inputDate.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: inputDate.getTime(),
      utc: inputDate.toUTCString()
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
