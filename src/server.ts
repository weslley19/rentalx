import express from 'express';

import { categoriesRouter } from './routes/categories.routes';
import { specificationsRouter } from './routes/specifications.routes';

import { PORT } from './constants/constants';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specifications', specificationsRouter);

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}!`)
})
