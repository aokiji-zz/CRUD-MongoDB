const express = require('express')
const app = express()
var port = 8081
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
//config
  //Template Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main', 
                                       runtimeOptions: {
                                           allowProtoPropertiesByDefault: true,
                                           allowProtoMethodsByDefault: true,
                                       },
                                    }))

                                    
  app.set('view engine', 'handlebars')
  //body parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
//rotas
app.get('/', function(req, res) {
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
    
})
//formulário
app.get('/cadastrar', function(req, res) {
    res.render('formulario')
})
//cadastrar os dados do formulário
app.post('/adicionar', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro ao criar a postagem " + erro)
    })
})

//rota para deletar
app.get('/delete/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Post apagado com sucesso!!")
    }).catch(function(erro){
        res.send("Houve um erro")
    })
})
app.listen(port, function() {
    console.log(`Servidor rodando na url http://localhost:${port}`)
})//última do código