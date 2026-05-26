const fs = require('fs');
const { FILE_PATH } = require('../config/dataPath');

class TicketService {

    _readData() {
        try {
            const data = fs.readFileSync(FILE_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    _writeData(data) {
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    }

    getAll(prioridad) {
        let tickets = this._readData();
        if (prioridad) {
            tickets = tickets.filter(t => t.prioridad.toLowerCase() === prioridad.toLowerCase());
        }
        return tickets;
    }

    getById(id) {
        const tickets = this._readData();
        return tickets.find(t => t.id === parseInt(id));
    }

    create(ticketData) {
        const tickets = this._readData();
        
        const newId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1;
        
        const newTicket = {
            id: newId,
            titulo: ticketData.titulo,
            descripcion: ticketData.descripcion,
            prioridad: ticketData.prioridad || "baja" 
        };

        tickets.push(newTicket);
        this._writeData(tickets);
        
        return newTicket;
    }
}


module.exports = new TicketService();