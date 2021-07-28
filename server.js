const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: "1",
      image: "https://placeimg.com/64/64/1",
      name: "Sun",
      date: "1976.02.08",
      money: "20,000",
      interest: "0.1",
    },
    {
      id: "2",
      image: "https://placeimg.com/64/64/2",
      name: "Moon",
      date: "1996.12.31",
      money: "+2900",
      interest: "0.1",
    },
    {
      id: "3",
      image: "https://placeimg.com/64/64/3",
      name: "Star2",
      date: "2010.01.07",
      money: "1,000",
      interest: "0.1",
    },
    {
      id: "4",
      image: "https://placeimg.com/64/64/4",
      name: "Star3",
      date: "2014.08.18",
      money: "20,000",
      interest: "0.1",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
