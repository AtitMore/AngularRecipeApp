import { Ingredient } from "../shared/ingredient.model";

export class RecipeModel {
    public recipe_name: string;
    public description: string;
    public image: string;
    public ingredients: Ingredient[];

    constructor(recipe_name: string, description: string, image: string, ingredients: Ingredient[]) {
        this.recipe_name = recipe_name;
        this.description = description;
        this.image = image;
        this.ingredients = ingredients
    }
} 