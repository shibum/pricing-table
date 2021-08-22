const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'pricingTable.json');

const getPricingTableData = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class PriceTire {
    constructor(data) {}

    static fetchAll(cb) {
        getPricingTableData(cb);
    }
};
