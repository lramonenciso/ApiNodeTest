const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola Esto es una prueba de JSON"
        }
    );
});

router.post('/api/test', (req, res) => {
    let conMonedas = req.query.conMonedas;
    res.json(
        {
            "message": ` Cantidad de monedas registradas : ${conMonedas}`
        }
    );
})

module.exports = router;