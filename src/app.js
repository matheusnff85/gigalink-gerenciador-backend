const express = require('express');
const emailRouter = require('./routes/email.routes');
const fornecedorRouter = require('./routes/fornecedor.routes');
const telefoneRouter = require('./routes/telefone.routes');
const produtoRouter = require('./routes/produto.routes');
const itemRouter = require('./routes/item.routes');
const pedidoRouter = require('./routes/pedido.routes');
const transportadoraRouter = require('./routes/transportadora.routes');

const app = express();

app.use(express.json());

app.use('/emails', emailRouter);
app.use('/fornecedores', fornecedorRouter);
app.use('/telefones', telefoneRouter);
app.use('/produtos', produtoRouter);
app.use('/items', itemRouter);
app.use('/pedidos', pedidoRouter);
app.use('/transportadoras', transportadoraRouter);

module.exports = app;
