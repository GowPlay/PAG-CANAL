
let index = (req, res) => res.render('index' );
let Brochure = (req, res) => res.render('Brochure')
let Presentacion = (req, res) => res.render('Presentacion')
let CatalogoProductos =  (req, res) => res.render('Catalogo')
let PreciosMayoristas =  (req, res) => res.render('Precios')
let ConfiteArazaChocolate = (req, res) => res.render('ConfiteArazaChocolate')
let ConfiteAraza = (req, res) => res.render('ConfiteAraza')
let ConfiteCocona = (req, res) => res.render('ConfiteCocona')
let ConfiteCopoazu = (req, res) => res.render('ConfiteCopoazu')
let GalletaAraza = (req, res) => res.render('GalletaAraza')
let MermeladaAraza = (req, res) => res.render('MermeladaAraza')
let PulpaFrutosAmazon = (req, res) => res.render('PulpaFrutosAmazon')
let SalsaAgridulceAraza = (req, res) => res.render('SalsaAgridulceAraza')
let SalsaPicanteAraza = (req, res) => res.render('SalsaPicanteAraza')
let AjiPolvo = (req, res) => res.render('AjiPolvo')
let AjiNegro = (req, res) => res.render('AjiNegro')

module.exports = {
    index,
    Brochure,
    Presentacion,
    CatalogoProductos,
    PreciosMayoristas,
    ConfiteArazaChocolate,
    ConfiteAraza,
    ConfiteCocona,
    ConfiteCopoazu,
    GalletaAraza,
    MermeladaAraza,
    PulpaFrutosAmazon,
    SalsaAgridulceAraza,
    SalsaPicanteAraza,
    AjiPolvo,
    AjiNegro
}