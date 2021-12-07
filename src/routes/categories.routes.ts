import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ message: 'Category already exists' });
  }

  categoriesRepository.create({ name, description, createdAt: new Date()});

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all)
});

export { categoriesRouter };
