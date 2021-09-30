import { DietService } from './../../../services/dieta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Diet } from 'src/app/models/dieta';

@Component({
  selector: 'app-alterar-diet',
  templateUrl: './alterar-diet.component.html',
  styleUrls: ['./alterar-diet.component.css']
})
export class AlterarDietComponent implements OnInit {
  id!: number;
  title!: string;
  objetivo!: string;
  dataInicio!: string;
  dataFim!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: DietService) {}

  ngOnInit(): void {}

  editar(): void {
      let diet: Diet = {
          id : this.id,
          title: this.title,
          objetivo: this.objetivo,
          dataInicio: this.dataInicio,
          dataFim: this.dataFim,
          criadoEm: this.criadoEm,
      };
      this.service.update(diet).subscribe((diet) => {
          console.log(diet);
          this.router.navigate(["dieta/listar"]);
      });
  }
}
