import app from "./src/app.js";

const port = process.env.PORT || 3000;

/*
const rotas = {
    '/': 'Curso de NodeJs REST com mongodb',
    '/livros': 'Livros para complemento',
    '/autores': 'Lista de autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url]);
});
*/

app.listen(port, () => {
    console.log(`SERVER ON http://localhost:${port}`);
});