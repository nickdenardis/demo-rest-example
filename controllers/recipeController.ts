import RecipeService from "../services/RecipeService.ts";
import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import IRecipe from "../entities/iRecipe.ts";

const recipeService = new RecipeService();

export const getRecipes = async (context: RouterContext) => {
  context.response.body = await recipeService.getRecipes();
};

export const getRecipe = async (context: RouterContext) => {
  const { response } = context;

  try {
    let id: string = context.params.id ?? "";

    const data: IRecipe = await recipeService.getRecipe(id);

    if (data) {
      response.status = 200;
      response.body = data;
    } else {
      response.status = 404;
      response.body = { msg: "Recipe not found" };
    }
  } catch (e) {
    response.status = 500;
    response.body = { msg: "Internal server error" };
    return;
  }
};

export const createRecipe = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid recipe data" };
    return;
  }

  const { value: {title, description, ingredients} } = await request.body();

  const recipeId = await recipeService.createRecipe(
    { title, description, ingredients },
  );

  response.body = { msg: "Recipe created", recipeId };
};

export const updateRecipe = async (context: RouterContext) => {
  const { request, response } = context;

  try {
    let id: string = context.params.id ?? "";

    if (!request.hasBody) {
      response.status = 400;
      response.body = { msg: "Invalid recipe data" };
      return;
    }

    const { value } = await context.request.body();

    const data: object = await recipeService.updateRecipe(id, value);

    response.status = 200;
    response.body = {
      msg: "Recipe updated",
      id: id,
      data: data,
    };
  } catch (e) {
    response.status = 500;
    response.body = { msg: "Internal server error" };
    return;
  }
};
