const express = require("express");
const cors = require('cors');
const connectDB = require("./config/connectDB");
const router  = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors())
app.use(express.json({ extended: false }));

app.get("/",(req,res)=>{
	res.send("Hello World")
});

app.use("/api",router)

app.listen(PORT,()=>{
	console.log("server is running on port: "+PORT)
});