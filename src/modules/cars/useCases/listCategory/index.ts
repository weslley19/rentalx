import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoryUseCase } from '../../useCases/listCategory/ListCategoryUseCase';
import { ListCategoryController } from '../../useCases/listCategory/ListCategoryController';

const categoriesRepository = new CategoriesRepository();

const listCategoryService = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController }
