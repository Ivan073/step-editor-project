module.exports = (sequelize, Sequelize) =>{
    const Account = sequelize.define("account", {   //модель-аккаунты соответствующая таблице
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        login: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        }
      });
      return Account;
}