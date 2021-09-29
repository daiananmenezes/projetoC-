import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diet } from 'src/app/models/dieta';
import { Meal } from 'src/app/models/meal';
import { DietService } from 'src/app/services/dieta.service';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-mostrar-diet',
  templateUrl: './mostrar-diet.component.html',
  styleUrls: ['./mostrar-diet.component.css']
})
export class MostrarDietComponent implements OnInit {

  id!: number;
  diet!: Diet;
  meals!: Meal[];

  constructor(private route: ActivatedRoute, private mealService: MealService, private dietService: DietService) { }
  

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.dietService.find(this.id).subscribe(diet => this.diet = diet)
    this.mealService.findByDietId(this.id).subscribe(meals => this.meals = meals)
  }

}
