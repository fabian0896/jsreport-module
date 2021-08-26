const path = require('path');
const renderReport = require('./');
const fs = require('fs')

const users = Array(100).fill({
    name: 'fabian',
    lastName: 'Dueñas',
    age: 25
});

const template = fs.readFileSync(path.join(__dirname, 'templates', 'template.html'), {encoding: 'utf-8'}).toString();
console.log(template);
(async () => {
    await renderReport({
        template,
        data: {
            users
        },
        savePath: './newReport.xlsx'
    })
})();



