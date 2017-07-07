import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Meal } from './meal.model';

@Component({
	selector:'food-list',
	template:`
		<div *ngIf="meals.length>0" class="col-md-6 food-list">
			<div class="filter">
				<div class="col-xs-2">
					<p>Filter<p>
				</div>
				<div class="col-xs-10">
					<select class="form-control">
						<option>All</option>
						<option>More than 500 Calories</option>
						<option>Less than 500 Calories</option>
					</select>
				</div>
			</div>
			<table class="table table-bordered">
				<thead class="btn-success">
					<td>Name</td>
					<td>Type</td>
					<td>Description</td>
					<td>Calories</td>
				</thead>
				<tr *ngFor="let meal of meals">
					<td>{{meal.name}}</td>
					<td>{{meal.type}}</td>
					<td>{{meal.description}}</td>
					<td>{{meal.calories}}</td>
					<td class="btn-success edit" (click)="editFoodClicked(meal)">Edit</td>
					<td class="btn-danger edit" (click)="editFoodClicked(meal)">Delete</td>
				</tr>


			</table>

		</div>
	`
})

export class FoodListComponent{
	@Input() meals:Meal[];
	@Output() editFoodClickedSender = new EventEmitter();

	editFoodClicked(meal:Meal){
		this.editFoodClickedSender.emit(meal)
	}
	
}