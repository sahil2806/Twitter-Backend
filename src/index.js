
import bodyParser from 'body-parser';
import express from 'express';
import { connect } from './config/database.js';
import apiroutes from './routes/index.js';

const app = express();
 




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',apiroutes);

app.listen(3000, async () => {
    console.log(`server started on port 3000`);
    await connect();
    console.log(`Mongo db connected`);
})


