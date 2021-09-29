import { MealService } from './../../../services/meal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { DietService } from 'src/app/services/dieta.service';
import { Diet } from 'src/app/models/dieta';

@Component({
  selector: 'app-cadastrar-meal',
  templateUrl: './cadastrar-meal.component.html',
  styleUrls: ['./cadastrar-meal.component.css']
})
export class CadastrarMealComponent implements OnInit {

  id!: number;
  nome!: string;
  descricao!: string;
  refeicao!: string;
  horario!: string;
  criadoEm!: string;
  dietid!: number;

  diets!: Diet[];

  constructor(private router: Router, private mealService: MealService, private dietService: DietService) {
    dietService.list().subscribe(diets => { this.diets = diets });
  }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let meal : Meal = {
      nome: this.nome,
      descricao: this.descricao,
      refeicao: this.refeicao,
      horario: this.horario,
      dietid: this.dietid,
      criadoEm: this.criadoEm
    }
    this.mealService.create(meal).subscribe(meal => {
      console.log("to cadastrando");
      this.router.navigate(["refeicao/listar"]);
    });
  }

}
