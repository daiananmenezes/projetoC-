import { DietService } from './../../../services/dieta.service';
import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/dieta';

@Component({
  selector: 'app-listar-diet',
  templateUrl: './listar-diet.component.html',
  styleUrls: ['./listar-diet.component.css']
})
export class ListarDietComponent implements OnInit {
  diets: Diet[] = [];

  constructor(private service: DietService) {}

  ngOnInit(): void {
      this.service.list().subscribe((diets) => {
          this.diets = diets;
          console.log(diets);
      });
  }
}
