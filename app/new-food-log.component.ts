import { Component, Output, EventEmitter,Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector:'new-food',
	template:`
	<div *ngIf="isCreateFormVisible===false && isCreatePageVisible===true" class="col-md-4">
		<button (click)="addButtonClicked()" class="btn btn-success form-control">Add Food</button>			
	</div>
	<div *ngIf="isCreateFormVisible===true && isCreatePageVisible===true" class="col-md-4">
		We shall create new food here
		<div class="form-group">
			<label>Name of Food:</label>
			<input type="text" class="form-control" #newFoodName>
		</div>
		<div class="form-group">
			<label>Type:</label>
			<select class="form-control" #newFoodType>
				<option value="solids">Cooked Solid Meal</option>
				<option value="fruits">Fruits</option>
				<option value="drinks">Drink</option>
			</select>
		</div>
		<div class="form-group">
			<label>Description:</label>
			<textarea class="form-control" #newFoodDescription></textarea>
		</div>
		<div class="form-group">
			<label>Calories:</label>
			<input type="number" class="form-control" #newFoodCalories>
		</div>
		<button class="btn btn-success" (click)="addNewFood(newFoodName.value,newFoodType.value,newFoodDescription.value,newFoodCalories.value)" >Submit</button>
		<button class="btn btn-success pull-right" (click)="cancelButtonClicked()" >Cancel</button>
	</div>
	`
})

export class NewFoodLogComponent{
	@Output() public newFoodToAddSender = new EventEmitter();
	@Output() public AddButtonClickedSender = new EventEmitter();
	@Output() public cancelButtonClickedSender = new EventEmitter();
	@Input() isCreateFormVisible;
	@Input() isCreatePageVisible;


	addNewFood(a,b,c,d){
		var newfooditem = new Meal(a,b,c,d)
		this.newFoodToAddSender.emit(newfooditem)		
	}
	addButtonClicked(){
		this.AddButtonClickedSender.emit();
	}
	cancelButtonClicked(){
		this.cancelButtonClickedSender.emit();
	}
}
// name, type, calories
