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
        this.events.push(producto);
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

productoDesafio.addProduct('Yerba', 'Version suave', 1200, 'Ruta de la imagen de la Yerba', 1313, 50);
productoDesafio.addProduct('Azucar', 'Light', 1400, 'Ruta de la imagen del Azucar', 1314, 50);
productoDesafio.addProduct('Fideos', 'Coditos', 750, 'Ruta de la imagen de los Fideos', 1315, 50);
console.log(productoDesafio.getProducts());
console.log(productoDesafio.getProductsById(2));