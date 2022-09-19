import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a testing', 'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM'),
    new Recipe('A test recipe', 'this is a testing', 'https://media.danmurphys.com.au/dmo/product/140048-1.png?impolicy=PROD_SM')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
