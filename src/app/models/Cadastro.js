
const db = require('../../config/database')

const Inscricao = db.sequelize.define( 'inscricao',
    {
        nome: {
            type: db.Sequelize.STRING,
        },
        endereco: {
            type: db.Sequelize.STRING,
        },
        uf: {
            type: db.Sequelize.STRING,
        },
        dataNascimento: {
            type: db.Sequelize.DATE,
        },
        cidade: {
            type: db.Sequelize.STRING,
        },
        cpf: {
            type: db.Sequelize.STRING,
        },
        telefone: {
            type: db.Sequelize.STRING,
        },
        celular: {
            type: db.Sequelize.STRING,
        },
        obs: {
            type: db.Sequelize.STRING
        },
    },
        {
            freezeTableName: true,
            tableName: "inscricao"
        }
)

module.exports = Inscricao