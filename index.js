import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotevn from 'dotenv';
import postRoutes from './server/routes/posts.js';

const app = express();
dotevn.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://donellawc73:axelcoop13@cluster0.autaaye.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
.catch((error) => console.log(`${error}did not connect`));

mongoose.set('useFindAndModify',false);

