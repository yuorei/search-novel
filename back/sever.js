import express from 'express';
import 'dotenv/config'; // このモジュールで.envから環境変数を設定する
import {dbInit} from './db.js'
import {login} from './login.js'

const port = process.env.PORT;
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
dbInit()
app.post('/login', (req, res) => {
  var id=login(req.body.mail,req.body.password)
  res.json({ id: id });
});

//サーバー起動
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);