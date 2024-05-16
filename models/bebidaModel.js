const { v4: uuidv4 } = require('uuid');

class Bebida {
  constructor(nombre, precio, tamaño, usuario) {
    this.id = uuidv4();
    this.nombre = nombre;
    this.precio = precio;
    this.tamaño = tamaño;
    this.usuario = usuario;
  }

  static bebidas = [
    new Bebida('cafe', '1$', 'mediano', 'Katty Salvador'),
    new Bebida('te de manzanilla', '50 ctvs', 'pequeño', 'Jhonny Castañeda'),
    new Bebida('cochocolatada', '2$', 'grande', 'Rocio Correa'),
  ];

  static obtenerTodo() {
    return this.bebidas;
  }

  static obtenerPorId(id) {
    return this.bebidas.find(bebida => bebida.id === id);
  }

  static obtenerPorUsuario(usuario) {
    return this.bebidas.filter(bebida => bebida.usuario === usuario);
  }

  static guardar(bebida) {
    const nuevaBebida = new Bebida(bebida.nombre, bebida.precio, bebida.tamaño, bebida.usuario);
    this.bebidas.push(nuevaBebida);
    return nuevaBebida;
  }

  static actualizarPorId(id, bebidaActualizada) {
    const index = this.bebidas.findIndex(bebida => bebida.id === id);
    if (index !== -1) {
      this.bebidas[index].nombre = bebidaActualizada.nombre;
      this.bebidas[index].precio = bebidaActualizada.precio;
      this.bebidas[index].tamaño = bebidaActualizada.tamaño;
      this.bebidas[index].usuario = bebidaActualizada.usuario;
      return this.bebidas[index];
    }
    return null;
  }

  static eliminarPorId(id) {
    const index = this.bebidas.findIndex(bebida => bebida.id === id);
    if (index !== -1) {
      this.bebidas.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = Bebida;
