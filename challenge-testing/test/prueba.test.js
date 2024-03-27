//CarritoCompra deberia ser una clase
//agregarProducto deberia ser una instancia de la clase CarritoCompra
//Deberia tener un metodo llamado agregarProducto
//Deberia tener un motodo llamao calcularTotal
//Deberia tener un metodo llamado aplicarDescuento
//el metodo agregarProducto deberia poder agregar un producto a la lista
//El metodo calcularTotal deberia poder calcular el total de la compra 
//sumando los prtecios de todos los productos en el carrito
//El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra

const { type } = require("os");
const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
    let carritoCompra;
    
    beforeEach(() => {
        carritoCompra = new CarritoCompra();
    });

    describe("Sobre el constructor de la clase CarritoCompra", () => {
        it("CarritoCompra debería ser una clase", () => {
            expect(typeof CarritoCompra).toBe("function");
        });

        it("carritoCompra debería ser una instancia de la clase CarritoCompra", () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true);
        });

        it("Debería guardar productos en una lista", () => {
            expect(carritoCompra.products).toEqual([]);
        });
    });

    describe("Métodos de la clase CarritoCompra", () => {
        const product1 = {
            id: 1,
            name: 'lapicera blanca',
            price: 1000,
            quantity: 10
        };
        const product2 = {
            id: 2,
            name: 'lapicera negra',
            price: 2000,
            quantity: 20
        };

        it("Debería tener un método llamado agregarProducto", () => {
            expect(typeof carritoCompra.agregarProducto).toBe("function");
        });

        it("El método agregarProducto debería poder agregar un producto a la lista", () => {
            carritoCompra.agregarProducto(product1);
            expect(carritoCompra.products).toContain(product1);
        });

        it("Debería tener un método llamado calcularTotal", () => {
            expect(typeof carritoCompra.calcularTotal).toBe("function");
        });

        it("El método calcularTotal debería poder calcular el total de la compra sumando los precios de todos los productos en el carrito.", () => {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const totalEsperado = product1.price * product1.quantity + product2.price * product2.quantity;
            const total = carritoCompra.calcularTotal();

            expect(total).toBe(totalEsperado);
        });

        it("El método debería aplicar un descuento al total de la compra", () => {
            carritoCompra.agregarProducto(product1);
            carritoCompra.agregarProducto(product2);

            const subtotal = product1.price * product1.quantity + product2.price * product2.quantity;
            const porcentajeDescuento = 15;
            const totalEsperado = subtotal - (subtotal * (porcentajeDescuento / 100));

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento);

            expect(total).toBe(totalEsperado);
        });
    });
});