import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron">
  	<h1>Meal Tracker</h1>
    <h2>Track Calories Intake</h2>
  </div>
  <new-food
  [isCreatePageVisible]="isCreatePageVisible"
  [isCreateFormVisible]="isCreateFormVisible"
  (AddButtonClickedSender)="showAddForm($event)"
  (cancelButtonClickedSender)="hideAddForm($event)"
  (newFoodToAddSender)="createNewFoodItem($event)"
  ></new-food>
  <edit-meal
    (okayButtonClickedSender)="showAddButtonOnly($event)"
    [selectedToEditMeal]="selectedToEditMeal"
  ></edit-meal>
  <food-list
  [meals]="meals"
  (editFoodClickedSender)=editfood($event)
  ></food-list>
  `
})


export class AppComponent {
	public meals:Meal[]=[];
  public isCreateFormVisible:boolean = false;
  public isCreatePageVisible:boolean = true;

  public selectedToEditMeal:Meal = null;

	createNewFoodItem(foodItem:Meal ){
		this.meals.push(foodItem);
  }
  editfood(mealToEdit){
    this.selectedToEditMeal=mealToEdit;
    this.isCreatePageVisible = false;
  }
  showAddForm(){
    this.isCreateFormVisible=true;
  }
  hideAddForm(){
    this.isCreateFormVisible=false;
  }
  showAddButtonOnly(){
    this.selectedToEditMeal=null;
    this.isCreatePageVisible = true;
    this.isCreateFormVisible=false;


  }

}
