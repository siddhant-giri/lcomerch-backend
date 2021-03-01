require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");



//My ROUTES
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripePayment");
const paymentBRoutes = require("./routes/paymentBRoutes");





//DB CONNECTION

mongoose.connect(process.env.DATABASE, 
{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true

}).then(() => {
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("DB GOT OOPS");
}
);




//MIDDLEWARES

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//ROUTES
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);
app.use("/api", paymentBRoutes);



//DATABASE=mongodb://localhost:27017/gadgets

//PORT
const port = process.env.PORT || 8000;

if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname, '/projectfrontend/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'projectfrontend', 'build', 'index.html'))
})
}


//STARTING A SERVER
app.listen(port, () => {
    console.log(`App is Running at ${port}`);
})