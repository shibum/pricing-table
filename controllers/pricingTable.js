const _ = require("lodash");
const PriceTire = require('../models/priceTire');

exports.getPriceTires = (req, res, next) => {
    PriceTire.fetchAll(priceTires => {
        priceTires.forEach(element => {
            element.featureGroups =  _.orderBy(element.featureGroups,['title'], 'asc')
        });
        
        res.render('pricingTable', {
            tires: priceTires,
            pageTitle: 'Pricing Table',
            check: String.fromCharCode(10003),
            uncheck: String.fromCharCode(215),
            path: '/'
        });
    });
};
