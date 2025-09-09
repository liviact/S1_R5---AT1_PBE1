const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/login', (req, res) => {
    try {
        const { login: { usuario, senha } } = req.body;
    
        if (usuario.toLowerCase() === "livia.caetano" && Number(senha) === 1234) {
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