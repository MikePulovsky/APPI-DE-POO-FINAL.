const { RutinaEstudio } = require('./rutina');
// Exportamos la clase para usarla en otros archivos
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
    const tiempo = parseInt(req.query.tiempo) || 0;
    
    const estudiante = new RutinaEstudio(tiempo);
    const resultado = estudiante.generatiempoestudio();
    
    res.json(resultado);
});

// Endpoint POST para obtener rutina de estudio (alternativa)
app.post('/api', (req, res) => {
    const tiempo = parseInt(req.body.tiempo) || 0;
    
    const estudiante = new RutinaEstudio(tiempo);
    const resultado = estudiante.generatiempoestudio();
    
    res.json(resultado);
});

// Ruta principal para verificar si la API está funcionando
app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Rutinas de Estudio funcionando correctamente' });
});

/*// Puerto para desarrollo local
const PORT = process.env.PORT || 3000;

// Solo escuchar en el puerto cuando se ejecuta directamente
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}*/

// Exporta la app para Vercel
module.exports = app;
