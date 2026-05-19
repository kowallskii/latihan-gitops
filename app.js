const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: sans-serif; margin-top: 50px;">
      <h1>🚀 PointPik JS Terbang Tinggi</h1>
      <p>Aplikasi Node.js ini berjalan di Kubernetes via Jenkins & ArgoCD.</p>
      <p>Identifier: <b>kowallskii</b> | Repo: <b>poinpik-apps</b></p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Server jalan di port ${port}`);
});
