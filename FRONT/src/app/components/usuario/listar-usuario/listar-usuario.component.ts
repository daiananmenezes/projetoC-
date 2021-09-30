import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];


  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {
      this.service.list().subscribe((usuarios) => {
          this.usuarios = usuarios;
          console.log(usuarios);
      });
  }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome) =>{
      console.log(nome);
      this.router.navigate(["usuario/list"]);
      this.ngOnInit
      this.service.list().subscribe((usuarios) => {
        this.usuarios = usuarios;
        console.log(usuarios);
    });
    });
  }

}
