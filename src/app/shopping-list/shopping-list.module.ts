import { NgModule } from "@angular/core";
import { IngredientComponent } from "./ingredient/ingredient.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations : [
        ShoppingListComponent,
        IngredientComponent,
        ShoppingEditComponent,
    ],
    imports : [
        FormsModule,
        RouterModule.forChild([
            {path: '', component: ShoppingListComponent}
        ]),
        SharedModule
    ],
    // providers: [LoggingService]
})
export class ShoppingListModule {

}