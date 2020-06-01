import { EventEmitter, Injectable } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<RecipeModel>();
    error = new Subject<string>()
    private recipes: RecipeModel[] = [
        new RecipeModel('A test Recipe', 
        'This is the simple', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg', [
            new Ingredient('Meat', 1, 'https://5.imimg.com/data5/GJ/RX/BX/SELLER-27331413/boiler-chicken-meat-500x500.jpg'),
            new Ingredient('Fries', 30, 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg')
        ]),
        new RecipeModel('A test Recipe', 
        'This is the simple', 
        'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
        [
            new Ingredient('Meat', 1, 'https://5.imimg.com/data5/GJ/RX/BX/SELLER-27331413/boiler-chicken-meat-500x500.jpg'),
            new Ingredient('Fries', 30, 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg')
        ])
    ]

    constructor(private slService: ShoppingListService, private http: HttpClient, private route: Router ) {

    }

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredient(ingredients);
    }

    AddRecipe(recipeData: any) {
        this.http.post('https://recipe-67b29.firebaseio.com/recipe.json', 
        recipeData,
        {
            observe: 'response'
        }).subscribe(responseData => {
            this.route.navigate(['recipes']);
        }, error => {
            this.error.next(error)
        })
    }

    fetchRecipe() {
        return this.http.get('https://recipe-67b29.firebaseio.com/recipe.json',
        {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
            responseType: 'json'
        }).pipe(map(responseData =>{
            const recipeArray: RecipeModel[] = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    recipeArray.push({ ...responseData[key], id: key });
                }
            }
            return recipeArray;
        }),
            catchError(errorRes => {
            return errorRes;
          })
        )
    }
}