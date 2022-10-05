import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingreName: string = '';
  ingreQty: number;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  getIngre() {
    const ingreReadyToSend = new Ingredient(this.ingreName, this.ingreQty);
    this.slService.addIngredient(ingreReadyToSend);
  }

}
