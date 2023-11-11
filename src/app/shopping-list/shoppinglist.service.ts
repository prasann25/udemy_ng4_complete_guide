import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {
    @Output() ingredientAdded = new Subject<Ingredient[]>();
    
    private ingredients:Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 3)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        //console.log("Added ingredient", ingredient);
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.getIngredients());
    }

}