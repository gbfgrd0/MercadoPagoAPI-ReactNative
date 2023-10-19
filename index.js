const server = require('./server.js');
const port = 9283

server.listen(port, (err) => {
    if(err) console.log("Ocorreu um erro: " + err);
    console.log("Servidor rodando na porta: " + port)
})

// Teste
// Novo teste