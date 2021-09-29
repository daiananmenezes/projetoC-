import { MealService } from './../../../services/meal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';

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

  constructor(private router: Router, private service: MealService) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    let meal : Meal = {
      nome: this.nome,
      descricao: this.descricao,
      refeicao: this.refeicao,
      horario: this.horario,
      criadoEm: this.criadoEm
    }
    this.service.create(meal).subscribe(meal => {
      this.router.navigate(["meal/listar"]);
    });
  }

}
