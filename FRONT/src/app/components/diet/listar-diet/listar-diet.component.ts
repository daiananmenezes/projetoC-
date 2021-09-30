import { DietService } from './../../../services/dieta.service';
import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/models/dieta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-diet',
  templateUrl: './listar-diet.component.html',
  styleUrls: ['./listar-diet.component.css']
})
export class ListarDietComponent implements OnInit {
  diets: Diet[] = [];

  constructor(private service: DietService, private router: Router) {}

  ngOnInit(): void {
      this.service.list().subscribe((diets) => {
          this.diets = diets;
          console.log(diets);
      });
  }

  deletar(title: string):void{
    console.log(this.deletar);
    this.service.delete(title).subscribe((title) =>{
      console.log(title);
      this.router.navigate(["diet/list"]);
      this.ngOnInit
      this.service.list().subscribe((diets) => {
        this.diets = diets;
        console.log(diets);
    });
    });
  }

}
