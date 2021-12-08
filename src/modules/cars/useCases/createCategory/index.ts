import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryUseCase } from '../../useCases/createCategory/CreateCategoryUseCase';
import { CreateCategoryController } from '../../useCases/createCategory/CreateCategoryController';

const categoriesRepository = new CategoriesRepository();

const createCategoryService = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryService);

export { createCategoryController }
