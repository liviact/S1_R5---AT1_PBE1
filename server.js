const express = require('express');
const { time } = require('node:console');
const app = express();
const PORT = 8081;

app.use(express.json());

//solicitando os números e tratando caso não sejam válidos
app.post('/soma', (req, res) => {
    try { //desestruturando de acordo com o formato recebido do cliente
       const {soma: {num1, num2, num3}} = req.body;
       console.log(num1, num2, num3);
       //tratando caso sejam inválidos os valores
       if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            return res.status(404).send("valor inválido!");
        } //caso estejam válidos, ele faz a soma e devolve o resultado
    let resultado = parseFloat(num1)+parseFloat(num2)+parseFloat(num3)
    res.status(201).json({message: `olá, a soma dos números é  ${resultado}`});
    } catch (error) {
        console.error(`erro:`, error)
        res.status(500).json({errorMessage: error});
    }
});


app.listen(PORT, () => {
    console.log(`servidor rodando em localhost:${PORT}`);
});