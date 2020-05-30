import RecipeRepository from "../repositories/RecipeRepository.ts";
import IRecipe from "../entities/iRecipe.ts";

class RecipeService {
  constructor() {}

  readonly recipeRepository = new RecipeRepository();

  getRecipes = async () => {
    return await this.recipeRepository.find();
  };

  createRecipe = async (recipe: IRecipe) => {
    return await this.recipeRepository.insertOne(recipe);
  };

  getRecipe = async (id: string) => {
    return await this.recipeRepository.get(id);
  };

  updateRecipe = async (id: string, values: object) => {
    return await this.recipeRepository.updateOne(id, values);
  };

  deleteRecipe = async (id: string) => {
    return await this.recipeRepository.deleteOne(id);
  };
}

export default RecipeService;
