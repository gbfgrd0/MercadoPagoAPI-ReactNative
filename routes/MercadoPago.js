require('dotenv').config();
const { Router } = require('express');
const mercadopago = require('mercadopago');
const Mercado_Pago = Router();

const { ACCESS_TOKEN } = process.env;

if (ACCESS_TOKEN) {
    mercadopago.configure({
        access_token: ACCESS_TOKEN
    })
}



Mercado_Pago.post("/", async (req, res) => {
    console.log(req)
    try {
        const produto = req.body;

        const preferencia = {
            items: [{
                title: produto.name,
                picture_url: produto.imagem,
                unit_price: 200,
                currency_id: "BRL",
                description: produto.description,
                quantity: produto.contador
            }],
            back_urls: {
                success: "http://localhost:5000",
                failure: "http://localhost:5000/Error"
            },
            auto_return: "approved"
        };

        const response = await mercadopago.preferences.create(preferencia)

        res.status(200).send({ response });

    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)
    }
})

module.exports = Mercado_Pago;