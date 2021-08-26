const { execFile } = require('child_process');
const path = require('path');



const options = {
    template: {
        engine: 'handelbars',
        recipe: 'chrome-pdf',
        content: path.resolve('./templates', 'template.html'),
        name:{
            id: '12345',
            size: 258,
        }
    },
    data:{
        message: 'Hola mundo esto es un mensaje dinamico',
        user:{
            name: {
                full: 'Fabian David',
                short: 'fabi',
                age: 23
            },
            payments: {
                value: 120938,
                date: [1, 2 , 3, 4]
            }
        }
    },
    out: path.join(__dirname, 'outputs', 'out.pdf')
}

const formatOption = (obj) => {
    const keys = []
    for(let key of Object.keys(obj)){
        if (typeof obj[key] !== 'object') {
            keys.push(key);
        } else {
            const resultKeys = formatOption(obj[key]);
            const formatKeys = resultKeys.map((k) => `${key}.${k}`);
            keys.push(formatKeys);
        }
    }
    return keys.flat()
}



const result = formatOption(options);
console.log(result.flat());



/* const child = execFile('./assets/jsreport', ['--version'], (err, stdout, stderr) => {
    if(err) return console.log(err);
    console.log(stdout);
    console.log("se termino el proceso");
}) */
