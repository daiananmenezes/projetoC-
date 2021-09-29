import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-listar-meal',
  templateUrl: './listar-meal.component.html',
  styleUrls: ['./listar-meal.component.css']
})
export class ListarMealComponent implements OnInit {

  meals: Meal[] = [];

  constructor(private service: MealService) {}

  ngOnInit(): void {
      this.service.list().subscribe((meals) => {
          this.meals = meals;
          console.log(meals);
      });
  }
}
