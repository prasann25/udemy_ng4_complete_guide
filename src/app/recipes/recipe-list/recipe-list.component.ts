import { Component, OnDestroy, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-recipe-list',
    templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription: Subscription;

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router : Router) {
    }

    //@Output() recipeWasSelected = new EventEmitter<Recipe>();
    ngOnInit(): void {
        this.subscription = this.recipeService.recipesChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // onRecipeSelected(recipe: Recipe) {
    //     this.recipeWasSelected.emit(recipe);
    // }

}