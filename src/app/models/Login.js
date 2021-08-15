const db = require('../../config/database')

const Login = db.sequelize.define('login', 
{
    email: {
        type: db.Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },
    senha: {
        type: db.Sequelize.STRING
    },
  
}, 
    {
        freezeTableName: true,
        tableName: "login"
    }
    
    
  
)
// Login.sync({force: true})
module.exports = Login