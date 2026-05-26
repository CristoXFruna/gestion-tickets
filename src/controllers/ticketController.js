const ticketService = require('../services/ticketService');

class TicketController {

    getAllTickets(req, res) {
        try {
            const { prioridad } = req.query; 
            const tickets = ticketService.getAll(prioridad);
            
            return res.status(200).json(tickets);
        } catch (error) {
            return res.status(500).json({ error: "Error interno del servidor al listar los tickets." });
        }
    }

    getTicketById(req, res) {
        try {
            const { id } = req.params;
            const ticket = ticketService.getById(id);
            
            if (!ticket) {
                return res.status(404).json({ error: `Ticket con ID ${id} no encontrado.` });
            }
            
            return res.status(200).json(ticket);
        } catch (error) {
            return res.status(500).json({ error: "Error interno del servidor al buscar el ticket." });
        }
    }

    createTicket(req, res) {
        try {
            const { titulo, descripcion, prioridad } = req.body;

            if (!titulo || !titulo.trim()) {
                return res.status(400).json({ 
                    error: "Bad Request", 
                    mensaje: "El campo 'titulo' es obligatorio y no puede estar vacío." 
                });
            }

            if (!descripcion || !descripcion.trim()) {
                return res.status(400).json({ 
                    error: "Bad Request", 
                    mensaje: "El campo 'descripcion' es obligatorio y no puede estar vacío." 
                });
            }

            const nuevoTicket = ticketService.create({ titulo, descripcion, prioridad });
            
            return res.status(201).json({
                mensaje: "Ticket registrado exitosamente.",
                data: nuevoTicket
            });
        } catch (error) {
            return res.status(500).json({ error: "Error interno del servidor al crear el ticket." });
        }
    }
}

module.exports = new TicketController();