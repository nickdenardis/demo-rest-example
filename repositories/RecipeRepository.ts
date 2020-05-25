import db from "../db/mongo.ts";
import IRecipe from "../entities/iRecipe.ts";

class RecipeRepository {
  constructor() {}

  readonly recipeCollection = db.collection("recipes");

  async find() {
    const recipes = await this.recipeCollection.find();
    return recipes;
  }

  async get(id: string) {
    const recipe = await this.recipeCollection.findOne({_id: {"$oid": id}});
    return recipe;
  }

  async insertOne(recipe: IRecipe) {
    const { $oid } = await this.recipeCollection.insertOne(recipe);
    return $oid;
  }

  async updateOne(id: string, values: object) {
    const response = await this.recipeCollection.updateOne(
      { _id: {"$oid": id} },
      { $set: values }
    );

    return response;
  }
}

export default RecipeRepository;
