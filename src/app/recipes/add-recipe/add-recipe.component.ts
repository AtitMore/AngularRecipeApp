import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  newRecipe: FormGroup;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.newRecipe = new FormGroup({
      'recipeData': new FormGroup({
        'recipe_name': new FormControl(null, [Validators.required]),
        'description': new FormControl(null, [Validators.required]),
        'image': new FormControl(null, [Validators.required])
      }),
    });
  }

  onSubmit() {
    this.recipeService.AddRecipe(this.newRecipe.value.recipeData)
  }

}
