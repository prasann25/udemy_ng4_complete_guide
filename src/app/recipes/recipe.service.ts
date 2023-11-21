import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private shoppingListService: ShoppingListService) {
    }

    private recipes: Recipe[] = [];
    //     new Recipe(
    //         'Crab Salad', 
    //         'This is a crab salad recipe', 
    //         'https://cdn.pixabay.com/photo/2016/09/17/05/01/seafood-1675591_1280.jpg', 
    //         [
    //             new Ingredient('Crab', 10), 
    //             new Ingredient('Lettuce', 1)
    //         ]),

    //         new Recipe(
    //             'Idli Sambar', 
    //             'Recipe for Idli sambar description', 
    //             'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_640.jpg',
    //             [
    //                 new Ingredient('Lentil', 7),
    //                 new Ingredient('Vegetables', 4),
    //             ])
    // ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        console.log("Get Recipe ", index);
        return this.getRecipes()[index];
    }
    
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }



}