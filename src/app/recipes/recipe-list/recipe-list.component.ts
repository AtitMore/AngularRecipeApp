import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[]  
  recipeData: any;
  

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.fetchRecipe();
  }

  fetchRecipe(){
    this.recipeService.fetchRecipe().subscribe(
      recipesData => {
        this.recipeData = recipesData
      }
    )
  }

}
