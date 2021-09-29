import { MealService } from 'src/app/services/meal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-editar-meal',
  templateUrl: './editar-meal.component.html',
  styleUrls: ['./editar-meal.component.css']
})
export class EditarMealComponent implements OnInit {
  nome!: string;
  descricao!: string;
  refeicao!: string;
  horario!: string;
  criadoEm!: string;
  dietid!: number;

  constructor(private router: Router, private service: MealService) {}

  ngOnInit(): void {}

  editar(): void {
      let meal: Meal = {
          nome: this.nome,
          descricao: this.descricao,
          refeicao: this.refeicao,
          horario: this.horario,
          criadoEm: this.criadoEm,
          dietid: this.dietid,
      };
      this.service.update(meal).subscribe((meal) => {
          console.log(meal);
          this.router.navigate(["refeicao/listar"]);
      });
  }
}
