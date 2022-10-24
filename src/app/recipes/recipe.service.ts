import { createInjectableType } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe A',
      'this is a testing A',
      'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Test recipe B',
      'this is a testing B',
      'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM',
      [
        new Ingredient('Buns', 5),
        new Ingredient('Apple', 3)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.getIngredients(ingredients);
    this.slService.receiveIngredients(ingredients);
  }
}
