let express = require('express');
let router = express.Router();
let BicicletaController = require('../controllers/bicicleta')


router.get('/',BicicletaController.bicicleta_list);

router.get('/create',BicicletaController.bicicleta_create_get)
router.post('/create',BicicletaController.bicicleta_create_post)

router.post('/:id/delete',BicicletaController.bicicleta_delete_post)

router.get('/:id/update',BicicletaController.bicicleta_update_get)
router.post('/:id/update',BicicletaController.bicicleta_update_post)


module.exports = router;
