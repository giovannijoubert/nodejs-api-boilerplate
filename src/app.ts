import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('server is listening on ' + port);
});