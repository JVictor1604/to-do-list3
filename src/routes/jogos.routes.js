const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const Jogoscontrollers = require('../controllers/jogos.controllers');
const { validId, validObjectBody } = require('../middlewares/jogos.middleware');

router.get('/jogos', Jogoscontrollers.findJogosController);

router.get('/jogos/:id', validId, Jogoscontrollers.findJogoByIdController);

router.post('/adicionarjogo', validObjectBody, Jogoscontrollers.addJogoController);

router.delete('/deletarjogo/:id', validId, Jogoscontrollers.deleteJogoController);

router.put('/atualizarjogo/:id', validId, validObjectBody, Jogoscontrollers.updateJogosController);

module.exports = router;
