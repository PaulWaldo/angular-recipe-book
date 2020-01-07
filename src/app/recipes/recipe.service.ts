import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/2560px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'Say no more!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/2560px-RedDot_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  getRecipes() {
    // Return a copy to prevent modification
    return this.recipes.slice();
  }

  constructor() {}
}
