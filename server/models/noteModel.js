module.exports = (sequelize, Sequelize) =>{
    const Note = sequelize.define("notes", {   //модель-аккаунты соответствующая таблице
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        content: {
          type: Sequelize.BLOB
        },
        account_id: {
          type: Sequelize.INTEGER
        },
        hidden: {
            type: Sequelize.BOOLEAN
         },
      });
      return Note;
}