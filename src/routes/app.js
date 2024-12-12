const express = require('express')
const public = require('../controllers/c_app')
const fs = require('fs');
const app = express.Router()

app.get('/', public.index)

app.get('/Brochure', public.Brochure)

app.get('/Presentacion', public.Presentacion)

app.get('/CatalogoProductos', public.CatalogoProductos)

app.get('/PreciosMayoristas', public.PreciosMayoristas)

app.get('/ConfiteArazaChocolate', public.ConfiteArazaChocolate)

app.get('/ConfiteAraza', public.ConfiteAraza)

app.get('/ConfiteCocona', public.ConfiteCocona)

app.get('/ConfiteCopoazu', public.ConfiteCopoazu)

app.get('/GalletaAraza', public.GalletaAraza)

app.get('/MermeladaAraza', public.MermeladaAraza)

app.get('/PulpaFrutosAmazon', public.PulpaFrutosAmazon)

app.get('/SalsaAgridulceAraza', public.SalsaAgridulceAraza)

app.get('/SalsaPicanteAraza', public.SalsaPicanteAraza)

app.get('/AjiPolvo', public.AjiPolvo)

app.get('/AjiNegro', public.AjiNegro)

app.get('/ads.txt', (req, res) => {
    const rutaAdsTxt = 'ads.txt';
    fs.readFile(rutaAdsTxt, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo ads.txt:', error);
            res.status(500).send('Error interno del servidor');
            return;
        }
        res.type('text/plain');
        res.send(data);
    })
})

module.exports = app;