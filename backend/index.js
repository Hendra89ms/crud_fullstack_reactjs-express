import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserRoute from './routes/UserRoute.js'

const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
// JIKA CONNECTION GAGAL 
db.on('error', (error) => console.log(error));
// JIKA CONNECTION BERHASIL
db.once('open', () => console.log('Database connected'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {
    console.log('PORT BERJALAN DI: ', port)
})