import { Component, Input, EventEmitter,Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
	selector:'edit-meal',
	template:`
	<div class="col-md-4" *ngIf="selectedToEditMeal">
		<div class="form-group">
			<label>Name of Food:</label>
			<input class="form-control" [(ngModel)]="selectedToEditMeal.name" >
		</div>
		<div class="form-group">
			<label>Type:</label>
			<input class="form-control" [(ngModel)]="selectedToEditMeal.type" >
		</div>
		<div class="form-group">
			<label>Description:</label>
			<textarea class="form-control" [(ngModel)]="selectedToEditMeal.description" ></textarea>
		</div>
		<div class="form-group">
			<label>Calories:</label>
			<input class="form-control" [(ngModel)]="selectedToEditMeal.calories" >
		</div>
		<button class="btn btn-success" (click)="okayButtonClicked()">Change</button>
		<button class="btn btn-success pull-right" (click)="okayButtonClicked()">Cancel</button>
	</div>
	`
})

export class EditMealComponent{
	@Input() selectedToEditMeal:Meal;
	@Output() okayButtonClickedSender = new EventEmitter;

	okayButtonClicked(){
		this.okayButtonClickedSender.emit();
	}

}