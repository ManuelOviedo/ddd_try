import express from 'express';
import bodyParser from 'body-parser';
import routes from "./app/routes/index.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.listen(3000, (err) => {
    if (err) {
        console.log("Error in server setup");
    }
    console.log("Server listening on Port 3000");
});