import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription} from 'rxjs';
import { TemplateBindingParseResult } from '@angular/compiler';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[];
  private shoppingListSubscription: Subscription;

  constructor(private shoppingListService : ShoppingListService,
      private logService: LoggingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        console.log('IngredientAdded EVent at shoppingListy', ingredients);
        this.ingredients = ingredients;
    });
    this.logService.printLog('Hello from ShoppingListComponent ngOnInit');
  }

  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
