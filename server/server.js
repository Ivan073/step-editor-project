const express = require("express"); 
const dotenv = require('dotenv');
const bp = require('body-parser');

const cors = require('cors');

dotenv.config();  // подключить глобальные переменные из .env файла
const PORT = process.env.PORT  // переменная отвечающая за порт 5050
const app = express(); // express объект-сервер

app.use(cors());

const fileUpload = require('express-fileupload');
app.use(fileUpload({}));

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
 
const db = require('./models/index.js');
db.sequelize.sync().catch((err)=>{
  console.log("DB connection error");
});
//app.use(bp.json());
//app.use(bp.urlencoded({ extended: true }));

const serverRouter = require('./routes/serverRouter');
const accountRouter = require('./routes/accountRouter');
const noteRouter = require('./routes/noteRouter');

app.use('/', serverRouter);
app.use('/accounts', accountRouter);
app.use('/notes', noteRouter);


app.listen(PORT, () => { //начать работу на порту 5050
    console.log(`Сервер начал прослушивание запросов на порту http://localhost:${PORT}`);
})