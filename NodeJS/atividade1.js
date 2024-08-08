const fs = require("fs")

const stream = fs.createReadStream('./conteudo.txt', {
    encoding: 'utf8',
    highWaterMark: 4
})

stream.on('data', (chunk) => {
    console.log("----------------------------")
    console.log(chunk)
    let array = chunk.split(' ').length
    if (array === 2) {
        if (chunk[0] === ' ' || chunk[3] === ' ') {
            array = array - 1;
        }
    }
    console.log(array)
})


stream.on('end', () => {
    console.log("Arquivo finalizado")
})