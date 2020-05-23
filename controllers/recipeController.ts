import RecipeService from "../services/RecipeService.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";

const recipeService = new RecipeService();

export const getRecipes = async (context: RouterContext) => {
  context.response.body = await recipeService.getRecipes();
};

export const createRecipe = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid recipe data" };
    return;
  }

  const { value: {title, description, ingredients} } = await request.body();

  const recipeId = await recipeService.createRecipe({title, description, ingredients});

  response.body = { msg: "Recipe created", recipeId };
};

//   context.params.id