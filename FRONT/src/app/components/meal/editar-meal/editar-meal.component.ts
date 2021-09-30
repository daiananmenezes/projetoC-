import { MealService } from 'src/app/services/meal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from 'src/app/models/meal';
import { Diet } from 'src/app/models/dieta';
import { DietService } from 'src/app/services/dieta.service';

@Component({
  selector: 'app-editar-meal',
  templateUrl: './editar-meal.component.html',
  styleUrls: ['./editar-meal.component.css']
})
export class EditarMealComponent implements OnInit {
  id!: number;
  nome!: string;
  descricao!: string;
  refeicao!: string;
  horario!: string;
  criadoEm!: string;
  dietid!: number;


  diets!: Diet[];

  constructor(private router: Router, private service: MealService, private dietService: DietService) {
    dietService.list().subscribe(diets => { this.diets = diets });
  }

  ngOnInit(): void {}

  editar(): void {
      let meal: Meal = {
          id : this.id,
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
