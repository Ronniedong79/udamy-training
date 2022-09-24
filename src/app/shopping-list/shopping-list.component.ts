import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  

  // selectedIngreName:string = '';
  ingredients: Ingredient[] = [
    new Ingredient ('Apple', 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    console.log (this.ingredients);
  }

}
