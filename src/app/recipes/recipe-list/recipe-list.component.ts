import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-recipe-list',
    templateUrl : './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router : Router) {
    }

    //@Output() recipeWasSelected = new EventEmitter<Recipe>();
    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    // onRecipeSelected(recipe: Recipe) {
    //     this.recipeWasSelected.emit(recipe);
    // }

}