import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription} from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private shoppingListSubscription: Subscription;

  constructor(private shoppingListService : ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }
}
