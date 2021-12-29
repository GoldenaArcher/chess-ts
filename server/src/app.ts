import globalErrorHandler from './controllers/errorController';
import matchRouter from './routes/matchRoutes';

const express = require('express');

const app = express();

app.use('/api/matches', matchRouter);

app.use(globalErrorHandler);

export default app;
