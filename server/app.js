import connectDB from './db/database.js';
import express, {json, urlencoded} from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use(urlencoded({extended: true}));

app.use("/", authRouter);





connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server listening at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })
