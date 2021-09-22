const db = require('./db')

const Post = db.sequelize.define('tabela', {
    nome: {
        type: db.Sequelize.STRING //aqui você define o tipo e a coluna
    },
    email: {
        type: db.Sequelize.STRING
    }
})
//Post.sync({force: true}) cria o banco de dados
module.exports = Post
