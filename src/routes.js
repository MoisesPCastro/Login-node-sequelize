const {Router} = require('express');
const LoginController = require('./app/controllers/LoginControllers');
const InscricaoController = require('./app/controllers/InscricaoControllers');

const routes = Router();

// rotas login
routes.get('/loginAll', LoginController.index);
routes.post('/loginBuscar', LoginController.show);
routes.post('/login', LoginController.store);
routes.put('/login/:id', LoginController.update);
routes.delete('/login/:id', LoginController.destroy);

//rotas inscrição

routes.post('/inscricao', InscricaoController.store);
routes.get('/inscricaoAll', InscricaoController.index);
routes.post('/inscricaoAd', InscricaoController.show);
routes.put('/inscricao/:id', InscricaoController.update);
routes.delete('/inscricao/:id', InscricaoController.destroy);

module.exports = routes;
