import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NewFoodLogComponent } from './new-food-log.component';
import { FoodListComponent } from './food-list.component'; 
import { EditMealComponent } from './edit-meal.component';

 
@NgModule({
	 imports: [
    BrowserModule,
    FormsModule
  ],
	declarations:[
	AppComponent,
	NewFoodLogComponent,
	FoodListComponent,
	EditMealComponent
	],
	bootstrap:[AppComponent]
})

export class AppModule{
	
}