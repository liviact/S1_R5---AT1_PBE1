const express = require('express');
const { time } = require('node:console');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/informacoes', (req, res) => {
    try {
       const {informacoes: {nome, idade, timeFavorito}} = req.body;
       console.log(nome, idade, timeFavorito);
    res.status(201).json({message: `olá, ${nome}, você tem ${idade} anos e seu time do coração 
        é ${timeFavorito}. ótima escolha!`});
    } catch (error) {
        console.error(`erro:`, error)
        res.status(500).json({errorMessage: error});
    }
});


app.listen(PORT, () => {
    console.log(`servidor rodando em localhost:${PORT}`);
});