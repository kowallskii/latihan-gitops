const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Deploy Berhasil!</h1><p>Aplikasi Node.js ini berjalan via Jenkins & ArgoCD.</p>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
