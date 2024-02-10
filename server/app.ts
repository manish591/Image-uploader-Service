import express from 'express';
const app = express();

app.get('/', function(req, res) {
  res.end('Got result');
});

export default app;