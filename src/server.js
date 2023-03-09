import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import morgan from "morgan";

import mailRoute from "./router/mail.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/mail', mailRoute);

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to MONGO DB`);
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
});