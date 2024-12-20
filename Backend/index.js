let express=require("express")
let cors=require("cors")
let mongoose=require("mongoose");
var bodyParser = require('body-parser');
const cartRouter = require("./route/cart.route");
const proute = require("./route/product.route");
const userRoute = require("./route/user.route");
let app=express()
mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce").then((res)=>{console.log("database connected");}).catch((err)=>{console.log(err);})
app.use(cors(
    {
        origin: ["https://ecommerce-gws5.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
let port=3001;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/",(req,res)=>{
  res.json("hi");
}
app.use("/cart",cartRouter)
app.use("/products",proute)
app.use("/user",userRoute)
app.use("/images",express.static("./images"))
app.listen(port)
