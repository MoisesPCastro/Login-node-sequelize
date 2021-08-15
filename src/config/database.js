const Sequelize = require('sequelize')

//conexão com o bando de dados Mysql
const sequelize = new Sequelize(
    'user',
    'moises',
    '5506',
    {
        host: 'localhost', 
        dialect: 'mysql' 
    });

    sequelize.authenticate().then(() => {
        console.log("Conexão com banco de dados mysql conectado com sucesso 000!")
    }).catch((err) => {
        console.log('FALHA AO SE CONECTAR COM BANCO DE DADOS MYSQL' + err)
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }