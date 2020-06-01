import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient('Orange', 5, 'https://5.imimg.com/data5/VK/DH/MY-15969261/fresh-kinnow-orrange-500x500.jpeg'),
        new Ingredient('Spinach', 10, 'https://i.ndtvimg.com/i/2016-11/spinach_620x350_81477995047.jpg')
    ]

    getIngredient() {
        return this.ingredients.slice();
    }

    addIngredient(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}