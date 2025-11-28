import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

import productRoutes from './routes/products.routes.js';

dotenv.config();

const app = express();

app.use(express.json()); //allow to accept json data in body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on http://localhost:5000");
});

