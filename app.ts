import express from 'express';
import routes from "./src/routers/route";
import cors from 'cors';



const app = express();
app.use(cors())
app.use((req, res, next)=> {
    console.log(`received a new request`)
  next();
})
app.use('/',routes);

const port = 3001;

app.listen(port, () => {
  console.log(`Api is running on ${port}`);
});