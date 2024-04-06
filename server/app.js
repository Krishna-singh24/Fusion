import express from 'express'
import connectDB from './db/database.js';
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server listening at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })
