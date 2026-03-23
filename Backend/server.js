import express from "express"
import mongoose from 'mongoose';
import cors from 'cors'
import router1 from "./Router/Product_router.js";
import router2 from "./Router/user_router.js"

const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/crud2026').then(()=>{
    console.log("MongoDB Connected Successfully")
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err)
})

app.use(express.json())

app.use(cors({
   origin: true,
   methods: ["GET", "POST","PUT","DELETE"],
   credentials: true
})); 

app.use('/api/product', router1);
app.use("/api/user",router2)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

