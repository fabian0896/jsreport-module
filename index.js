const jsreport = require('jsreport-core')();
const fs = require('fs');

jsreport.use(require('jsreport-handlebars')());
jsreport.use(require('jsreport-html-to-xlsx')());
jsreport.use(require('jsreport-chrome-pdf')());

module.exports = async function renderReport({template, data, helpers, savePath}) {
    if (!jsreport._initialized) {
        await jsreport.init();
    }
    const resp = await jsreport.render({
        template: {
                content: template,
                engine: 'handlebars',
                recipe: 'html-to-xlsx'
            },
            data,
            helpers
    });
    fs.writeFileSync(savePath, resp.content);
    console.log('Se genero el reporte correctamente');
};