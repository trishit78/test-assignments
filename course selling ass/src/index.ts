import express from 'express'; 

import dotenv from 'dotenv';
import v1Router from './router/v1Router.js';

dotenv.config();

const PORT=process.env.PORT;


const app = express();


app.use('/api',v1Router);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})