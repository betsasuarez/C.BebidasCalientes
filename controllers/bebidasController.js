const Bebida = require('../models/bebidaModel');

exports.obtenerTodo = (req, res) => {
  res.json(Bebida.obtenerTodo());
};

exports.obtenerPorId = (req, res) => {
  const bebida = Bebida.obtenerPorId(req.params.id);
  if (!bebida) {
    res.status(404).json({ error: 'Bebida no encontrada' });
  } else {
    res.json(bebida);
  }
};

exports.obtenerPorUsuario = (req, res) => {
  const bebidas = Bebida.obtenerPorUsuario(req.params.usuario);
  if (bebidas.length === 0) {
    res.status(404).json({ error: 'Bebidas no encontradas para este usuario' });
  } else {
    res.json(bebidas);
  }
};

exports.guardar = (req, res) => {
  const bebida = req.body;
  const nuevaBebida = Bebida.guardar(bebida);
  res.status(201).json(nuevaBebida);
};

exports.actualizarPorId = (req, res) => {
  const bebida = req.body;
  const actualizada = Bebida.actualizarPorId(req.params.id, bebida);
  if (!actualizada) {
    res.status(404).json({ error: 'Bebida no encontrada' });
  } else {
    res.json(actualizada);
  }
};

exports.eliminarPorId = (req, res) => {
  const eliminada = Bebida.eliminarPorId(req.params.id);
  if (!eliminada) {
    res.status(404).json({ error: 'Bebida no encontrada' });
  } else {
    res.json({ mensaje: 'Bebida eliminada correctamente' });
  }
};
