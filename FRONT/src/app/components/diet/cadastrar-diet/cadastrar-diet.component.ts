import { DietService } from './../../../services/dieta.service';
import { Diet } from './../../../models/dieta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-diet',
  templateUrl: './cadastrar-diet.component.html',
  styleUrls: ['./cadastrar-diet.component.css']
})
export class CadastrarDietComponent implements OnInit {

  id!: number;
  title!: string;
  objetivo!: string;
  dataInicio!: string;
  dataFim!: string;
  criadoEm!: string;

  constructor(private router: Router, private service: DietService) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    let dieta : Diet = {
      title: this.title,
      objetivo: this.objetivo,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      criadoEm: this.criadoEm
    }
    this.service.create(dieta).subscribe(dieta => {
      console.log("to cadastrando");
      this.router.navigate(["dieta/listar"]);
    });
  }
}
