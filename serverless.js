const jsreport = require('jsreport');
const fs = require('fs');
const path = require('path');

const users = Array(100).fill({
    name: 'Fabian David',
    lastName: 'Dueñas Garcia',
    age: 25
});

const template = fs.readFileSync(path.join(__dirname, 'templates', 'template.html'), 'utf8');
console.log(template);


jsreport.render({
    template: {
            content: template,
            engine: 'handlebars',
            recipe: 'chrome-pdf'
        },
        data: {
            foo: "world",
            message: "Hola mundo!!",
            users
        }
}).then((resp) => {
    fs.writeFileSync('report.pdf', resp.content);
    console.log('Se genero el reporte correctamente');
}).catch((e) => {
    console.log(e);
});
