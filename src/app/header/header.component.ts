import { Component, EventEmitter, Output } from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    collapsed = true;
    @Output('appGetMenuController') menuController = new EventEmitter<string> ();
    
    // : string = "";


    openRecipe() {
        this.menuController.emit ("recipe");
    }

    openShoppinglist() {
        this.menuController.emit ("shopping");
    }
}