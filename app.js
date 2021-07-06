const app = require("express")();

const PORT = process.env.PORT || 3000;

app.all("/", (req, res) => {
  res.send("Hello world");
});

function keepAlive(){
app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
}
module.exports=keepAlive