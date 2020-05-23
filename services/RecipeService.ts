import RecipeRepository from "../repositories/RecipeRepository.ts";
import IRecipe from "../entities/iRecipe.ts";

class RecipeService {
    constructor() {}

    readonly recipeRepository = new RecipeRepository();

    getRecipes = async () => {
        return await this.recipeRepository.find();
    }

    createRecipe = async (recipe: IRecipe) => {
        return await this.recipeRepository.insertOne(recipe);
    }
}

export default RecipeService;