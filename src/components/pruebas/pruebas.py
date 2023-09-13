class Producto:
    def __init__(self, nombre, precio, referencia, talla, cantidad, onclick):
        self.nombre = nombre
        self.precio = precio
        self.referencia = referencia
        self.talla = talla
        self.cantidad = cantidad
        self.onclick = onclick

    def mostrar_producto(self):
        print("*****************")
        print(self.nombre)
        print("*****************")
        print(self.precio)
        print("*****************")
        print(self.referencia)
        print("*****************")
        print(self.talla)
        print("*****************")
        print(self.cantidad)
        print("*****************")


class CarritoCompra:
    def __init__(self, producto):
        self.producto = producto

    def agregar_producto(self):
        compras = []
        i = 0
        while self.producto.onclick:
            if self.producto.onclick:
                compras.append(producto.mostrar_producto())
                break
        print(compras) 
        

producto = Producto("Jean", 80000, "JB-C3", "8", 10, False)
producto1 = Producto("Jean_2", 40000, "JB-C3", "6", 10, True)

productos_carrito = [producto, producto1]

carrito = CarritoCompra(producto1)

carrito.agregar_producto()
