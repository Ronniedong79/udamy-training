import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe A',
      'this is a testing A',
      'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM'
    ),
    new Recipe(
      'Test recipe B',
      'this is a testing B',
      'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM'
    ),
  ];
  
  @Output('passRecipeInfoList') recipeInfoList = new EventEmitter<Recipe> (); 

  constructor() {}

  ngOnInit(): void {}

  getRecipeInfo(recipe: Recipe) {
    this.recipeInfoList.emit (recipe);
    // console.log (recipeName);
  }

  // getRecipeDesc(recipeDesc: string) {
  //   this.recipeInfoList.emit (recipeDesc);
  // }
}
