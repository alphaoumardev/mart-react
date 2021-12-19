const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./controllers/user");
const authRoute = require("./controllers/auth");
const productRoute = require("./controllers/products");
const cartRoute = require("./controllers/cart");
const orderRoute = require("./controllers/order");
const stripeRoute = require("./controllers/stripe");
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection SSuccessfull!"))
    .catch((err) => { console.log(err); });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
