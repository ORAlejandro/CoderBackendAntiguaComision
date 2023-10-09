class ProductManager {
    constructor() {
        this.events = [];
    }

    addProduct(titulo, descripcion, precio, thumbnail, code, stock) {
        const producto = {
            id: this.#getMaxId() + 1,
            titulo,
            descripcion,
            precio,
            thumbnail,
            code,
            stock
        };

        const validacionCode = this.events.some((value) => {
             return value.code === producto.code
         })

        if(validacionCode) {
            console.log('Codigo en uso');
        } else {
            this.events.push(producto)
        }
        
    };

    #getMaxId() {
        let maxId = 0;
        this.events.map((event) => {
            if (event.id > maxId) maxId = event.id;
        })
        return maxId;
    };

    getProducts(){
        return this.events;
    };

    getProductsById(id) {
        const found = this.events.find((productos) => productos.id === id)
        if(found) {
            return found
        } else {
            return 'Not found'
        }
    }
};

const productoDesafio = new ProductManager();

// Agrego productos al Array:
productoDesafio.addProduct('Yerba', 'Version suave', 1200, 'Ruta de la imagen de la Yerba', 1313, 50);
productoDesafio.addProduct('Azucar', 'Light', 1400, 'Ruta de la imagen del Azucar', 1314, 50);
productoDesafio.addProduct('Fideos', 'Coditos', 750, 'Ruta de la imagen de los Fideos', 1315, 50);
//Prueba de repetir Code:
productoDesafio.addProduct('Harina', 'Molinos', 1400, 'Ruta de la imagen de la Harina', 1313, 50)

//Muestro el Array completo:
console.log(productoDesafio.getProducts());

//Muestro el producto filtrado por ID:
console.log(productoDesafio.getProductsById(2));