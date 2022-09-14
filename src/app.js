import express from 'express';
import emailRouter from './routes/email.routes';
import fornecedorRouter from './routes/fornecedor.routes';
import telefoneRouter from './routes/telefone.routes';
import produtoRouter from './routes/produto.routes';
import itemRouter from './routes/item.routes';
import pedidoRouter from './routes/pedido.routes';
import transportadoraRouter from './routes/transportadora.routes';

const app = express();

app.use(express.json());

app.use('/emails', emailRouter);
app.use('/fornecedors', fornecedorRouter);
app.use('/telefones', telefoneRouter);
app.use('/produtos', produtoRouter);
app.use('/items', itemRouter);
app.use('/pedidos', pedidoRouter);
app.use('/transportadoras', transportadoraRouter);

export default app;
