let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();
const cartRouter = require("./route/cart.route");
const proute = require("./route/product.route");
const userRoute = require("./route/user.route");

let app = express();
let port = process.env.PORT || 5000;

mongoose.connect(process.env.mongo_url).then((res) => {
  console.log("Database connected");
}).catch((err) => {
  console.log(err);
});

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("hi");
});

app.use("/cart", cartRouter);
app.use("/products", proute);
app.use("/user", userRoute);

app.use("/images", express.static("./images"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
