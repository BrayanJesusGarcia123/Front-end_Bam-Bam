const express = require('express')
const dashboard = require('./dashboard')
const facturacion = require('./facturacion')
const auth = require('./login')
const inventario = require('./inventario')
const lote = require('./lote')
const grupoproducto = require('./grupoproducto')
const reportes = require('./reportes')
const terceros = require('./terceros')
const empresaProve = require('./empresaProve')
const usuario = require('./usuarios')
const sucursales = require('./sucursales')

const log = require('../controller/auth/auth.js')

const router = express.Router();

router.use('/dashboard', dashboard);
router.use('/facturacion', facturacion);
router.use('/inventario', inventario);
router.use('/lote', lote);
router.use('/grupoproducto', grupoproducto);
router.use('/reportes', reportes);
router.use('/tercero', terceros);
router.use('/auth', auth);
router.use('/empresaProve', empresaProve);
router.use('/usuario', usuario);
router.use('/sucursales', sucursales);

router.get('/', (req, res) => {
    res.redirect('/auth/')
})

router.get('/404', (req, res) => {
    res.render('layouts/404')
})

module.exports = router