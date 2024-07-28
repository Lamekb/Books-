import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Surver running on port ${port}` );
})

app.get("/", (req, res) => {
    res.render("index.ejs"); 
  });

app.use(express.static("public"));

app.get("/malcolm", (req, res) => {
  res.render("malcolm.ejs")
});

app.get("/atomicHabit", (req, res) => {
  res.render("atomicHabit.ejs")
});

app.get("/richDadPoorDad", (req, res) => {
  res.render("richDadPoorDad.ejs")
});

app.get("/about", (req, res) => {
  res.render("about.ejs")
});

