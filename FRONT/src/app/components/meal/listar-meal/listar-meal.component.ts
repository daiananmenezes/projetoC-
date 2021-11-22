import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-listar-meal',
  templateUrl: './listar-meal.component.html',
  styleUrls: ['./listar-meal.component.css']
})
export class ListarMealComponent implements OnInit {

  meals: Meal[] = [];
  colunasExibidas: String[] = [
    "id",
    "nome",
    "descricao",
];

  constructor(private service: MealService, private router: Router) {}

  ngOnInit(): void {
      this.service.list().subscribe((meals) => {
          this.meals = meals;
          console.log(meals);
      });
  }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome) =>{
      console.log(nome);
      this.router.navigate(["meal/list"]);
      this.ngOnInit
      this.service.list().subscribe((meals) => {
        this.meals = meals;
        console.log(meals);
    });
    });
  }
}
