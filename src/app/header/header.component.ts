import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
    userSub : Subscription;
    isAuthenticated = false ;
    constructor(private dataStorage: DataStorageService, private authService: AuthService){
    }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !user ? false: true;
        })
    }

    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onLogout() {
        this.isAuthenticated = false;
        this.authService.logout();
    }
    
    onSaveData() {
        this.dataStorage.storeRecipes();
    }

    onFetchData() {
        this.dataStorage.fetchRecipes().subscribe();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

}