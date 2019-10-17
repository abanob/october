import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import phoneRouter from './routes/phoneRouter';
import errorHandler from './errors/errorHandler';
import globalConfig from './config';
// Load dotenv config
dotenv.config();

const app = express();
// parse application/json
app.use(bodyParser.json());
// use phone resolver router (unique application route)
app.use('/', phoneRouter);
// Error handler middleware
app.use(errorHandler);

const { port } = globalConfig;

app.listen(port, () => console.log(`app running on PORT ${port}`));
