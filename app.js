const app = require("express")();

const PORT = process.env.PORT || 3000;


function keepAlive(){
  app.all("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
}
module.exports=keepAlive