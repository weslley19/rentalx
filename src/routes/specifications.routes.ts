import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationsRepository);

  createSpecificationService.execute({ name, description});

  return response.status(201).send();
});

specificationsRouter.get('/', (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all)
});

export { specificationsRouter };
