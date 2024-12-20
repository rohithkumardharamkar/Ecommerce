<<<<<<< HEAD
let express=require("express");
let cors=require("cors");
let mongoose=require("mongoose");
var bodyParser = require('body-parser');
const cartRouter = require("./route/cart.route");
const proute = require("./route/product.route");
const userRoute = require("./route/user.route");
let app=express()
require('dotenv').config()

// mongodb://127.0.0.1:27017/Ecommerce
mongoose.connect(process.env.mongo_url).then((res)=>{console.log("database connected");}).catch((err)=>{console.log(err);})
app.use(cors());
let port=process.env.PORT || 5000
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cart",cartRouter)
app.use("/products",proute)
app.use("/user",userRoute)
app.use("/images",express.static("./images"))
app.listen(port)
=======
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();
const cartRouter = require("./route/cart.route");
const proute = require("./route/product.route");
const userRoute = require("./route/user.route");
let app = express();
let port = process.env.PORT || 3002;  


mongoose.connect("mongodb+srv://rohithkumardharamkar:Chintu@431431@cluster0.ji041.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0").then((res)=>{console.log("database connected");}).catch((err)=>{console.log(err);})

app.use(
  cors({
    origin: "https://ecommerce-gws5.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

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
>>>>>>> 6b1d35bb2e9ad07929bedf85d0c3c7cc92d49e30
