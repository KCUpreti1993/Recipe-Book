import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipe: Recipe[] =  [
   new Recipe('Test', 'this is the test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM022mb0K1EhIJtkEQMvyaivFwqbiAjk_2icvxcbCENnAL7n9&usqp=CAU')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
