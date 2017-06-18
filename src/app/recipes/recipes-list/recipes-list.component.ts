import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Recipes} from "../recipes.model";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();

  recipes: Recipes[] = [
    new Recipes('Dosa','Famous Dish in India','http://www.dosaparadise.net/images/dosa-3.png'),
    new Recipes('Idli','Typical Breakfast in India','https://s-media-cache-ak0.pinimg.com/originals/05/9d/52/059d527abfbddce1cd98058e65cfcba4.jpg')];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipes) {
    this.recipeWasSelected.emit(recipe);
  }



}
