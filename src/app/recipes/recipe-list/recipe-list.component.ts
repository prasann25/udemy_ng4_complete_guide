import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent {

    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Crab Salad', 'This is a crab salad recipe', 
        'https://cdn.pixabay.com/photo/2016/09/17/05/01/seafood-1675591_1280.jpg'),

        new Recipe('Idli Sambar', 'Recipe for Idli sambar description', 'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg')
    ];

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}