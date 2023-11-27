import express from 'express';
import MainRouter from './routes/MainRoutes';
import UsuarioRouter from './routes/UsuarioRoute';
import LeilaoRouter from './routes/LeilaoRoute';
import LanceRouter from './routes/LanceRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(UsuarioRouter);
app.use(MainRouter);
app.use(LeilaoRouter);
app.use(LanceRouter);


app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})