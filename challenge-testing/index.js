class Product{
    constructor(id,name,price,quantity)
    {
        this.id = id,
        this.name = id,
        this.price = price,
        this.quantity = quantity
    }
}

class CarritoCompra {
    constructor(){
        this.products = []
    }

    agregarProducto(product){
        this.products.push(product)
    }
    calcularTotal(){
        let precioTotal = 0;
        this.products.forEach(product => {
            precioTotal = precioTotal += product.price * product.quantity;
            
        });
        return precioTotal;
    }
    aplicarDescuento(porcentaje){
        const subtotal = this.calcularTotal();
        const descuento = subtotal * (porcentaje / 100); // Corrección aquí

        return subtotal - descuento;
    }
}

module.exports = CarritoCompra;