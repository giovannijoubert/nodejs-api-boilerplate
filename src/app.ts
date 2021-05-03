import express from 'express';
import serverless from 'serverless-http';
import routes from './routes';


const app = express();

app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports.handler = serverless(app);