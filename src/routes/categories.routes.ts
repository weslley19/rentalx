import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRouter };
