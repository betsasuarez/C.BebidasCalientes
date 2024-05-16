const express = require('express');
const router = express.Router();
const bebidasController = require('../controllers/bebidasController');

router.get('/', bebidasController.obtenerTodo);
router.get('/:id', bebidasController.obtenerPorId);
router.get('/usuario/:usuario', bebidasController.obtenerPorUsuario);
router.post('/', bebidasController.guardar);
router.put('/:id', bebidasController.actualizarPorId);
router.delete('/:id', bebidasController.eliminarPorId);

module.exports = router;
