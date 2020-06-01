import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent, 
        children:[
            { path: '', component: RecipeListComponent},
            { path: 'add', component: AddRecipeComponent}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}