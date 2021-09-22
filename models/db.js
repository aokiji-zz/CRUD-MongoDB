const Sequelize = require('sequelize')
//conexão com o DB
const sequelize = new Sequelize('bancodedados', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso!")
}).catch((erro)=>{
    console.log("Houve um erro ao se conectar: "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}