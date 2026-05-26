const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', ticketRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Recurso no encontrado en este servidor de Tickets." });
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo exitosamente en http://localhost:${PORT}`);
});