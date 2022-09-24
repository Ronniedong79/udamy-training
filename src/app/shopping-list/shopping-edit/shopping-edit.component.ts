import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingreName: string = '';
  ingreQty: number;



  @Output('getIngre') postIngreName = new EventEmitter<Ingredient> ();
  // @Output() postIngreQty = new EventEmitter<Ingredient> ();



  constructor() { }

  ngOnInit(): void {
  }

  getIngre() {
    const ingreReadyToSend = new Ingredient(this.ingreName, this.ingreQty);
    this.postIngreName.emit(ingreReadyToSend);
  }

}
