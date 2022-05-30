const Sequelize = require("sequelize");
const sequelize = new Sequelize("editorProject", "root", "123qwe", { //подключение к бд
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});

db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.accounts = require("./accountModel.js")(sequelize, Sequelize); //получение представления таблицы accounts
db.notes = require("./noteModel.js")(sequelize, Sequelize);
module.exports = db; //из данного файла экспортируется объект db содержащий представления таблиц