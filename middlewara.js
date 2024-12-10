// Middleware per le rotte non registrate
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: "Risorsa non trovata" });
};

// Middleware per la gestione degli errori
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log dell'errore
    res.status(500).json({ error: "Errore interno del server" });
};

module.exports = {
    notFoundHandler,
    errorHandler,
};