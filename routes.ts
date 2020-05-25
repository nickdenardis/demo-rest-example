import { Router } from "https://deno.land/x/oak/mod.ts";
import { getRecipes, createRecipe, getRecipe, updateRecipe } from "./controllers/recipeController.ts";

const router = new Router();

router.get("/recipes", getRecipes)
    .post("/recipes", createRecipe)
    .get("/recipes/:id", getRecipe)
    .patch("/recipes/:id", updateRecipe);

export default router;