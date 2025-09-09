const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/login', (req, res) => {
    try {
        const { login: { usuario, senha } } = req.body;
    //ignorando se a letra é maiúscula ou minúscula e estipilando um valor estático para senha e usuário
        if (usuario.toLowerCase() === "livia.caetano" && Number(senha) === 1234) {
            //caso o valor esteja correto, ele devolve uma mensagem avisando. caso não esteja, ele manda uma 'error message'""
            res.status(201).json({ message: `usuário e senha corretos!` });
        } else { 
            (res.status(401).json ({errorMessage: `usuário ou senha inválidos` })); 
        }
    } catch (error) {
        console.error(`erro:`, error)
        res.status(500).json({ errorMessage: error });
    }
});


app.listen(PORT, () => {
    console.log(`servidor rodando em localhost:${PORT}`);
});