import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {
    @Output() ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();
    
    private ingredients:Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 3)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.getIngredients()[index];
    }

    addIngredient(ingredient: Ingredient) {
        //console.log("Added ingredient", ingredient);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.getIngredients());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1)
        this.ingredientsChanged.next(this.ingredients.slice());
    }



}