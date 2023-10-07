class ProductManager {
    #precioBaseDeGanancia = 0.15;

    constructor(){
        this.events = [];
    }

    addEvent(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const event = {
            id: this.#getMaxId() +1,
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia),
            capacidad,
            fecha,
            participantes: []
        };
        this.events.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.events.map((event) => {
            if(event.id > maxId) maxId = event.id;
        })
        return maxId;
    };

    getEvents(){
        return this.events;
    };

    getEvent(idEvent){
        return this.events.find((event) => event.id === idEvent);
    }

    addUsuario(idEvent, idUsuario){
        const event = this.getEvent(idEvent);
        if(event) {
            if(!event.participantes.includes(idUsuario)) event.participantes.push(idUsuario);
        } else return 'este evento no existe'
    }

    eventTour(idEvent, nuevoLugar, nuevaFecha){
        const event = this.getEvent(idEvent);
        if(event){
            const nuevoEvento = {
                ...event,
                id: this.#getMaxId() +1,
                lugar: nuevoLugar,
                fecha: nuevaFecha,
                participantes: []
            };
            this.events.push(nuevoEvento);
        } else return 'este evento no existe'
    };
};

const productoDesafio = new ProductManager();

productoDesafio.addEvent('Rock in Rio', 'Sao Pablo', 75250);
productoDesafio.addEvent('Find a Bomb', 'Korea del Sur', 3500);
productoDesafio.addUsuario(1, 'Pedro');
productoDesafio.addUsuario(2, 'Ale');
productoDesafio.eventTour(1, 'Brasilia', new Date("Octubre 13, 2023 02:25:00"));
console.log(productoDesafio.getEvents());