import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('getRecipesGroup') recipe: Recipe;

  @Output('passRecipeInfo') recipeInfo = new EventEmitter<void> (); 
  // @Output('passRecipeDesc') recipeDesc = new EventEmitter<string> (); 

  passInfo: string;


  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe() {
    this.recipeInfo.emit ();
    // this.recipeInfo.emit (this.recipe.description);
    // console.log (this.passInfo);
  }

}
