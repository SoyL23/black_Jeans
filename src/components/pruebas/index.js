class Producto {
    constructor(nombre, precio, referencia, talla, cantidad, onclick) {
        this.nombre = nombre;
        this.precio = precio;
        this.referencia = referencia;
        this.talla = talla;
        this.cantidad = cantidad;
        this.onclick = onclick;
    }

    mostrar_producto() {
        let producto = [this.nombre, this.precio,this.referencia]
        return producto
    }
}

class CarritoCompra {
    constructor(producto) {
        this.producto = producto;

    }

    agregar_producto() {
        const compras = [];
        while (this.producto.onclick) {
            compras.push(this.producto.mostrar_producto());
            break;
        }
        console.log(compras);
    }

    sumar_precio(producto){
       let total = this.producto.precio + producto.precio
       return total
    }
}

const producto = new Producto("Jean", 80000, "JB-C8", "8", 10, false);
const producto1 = new Producto("Jean_2", 40000, "JB-C3", "6", 10, true);
const carrito = new CarritoCompra(producto);
console.log(carrito.agregar_producto());;




