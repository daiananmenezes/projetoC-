import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id!: number;
  nome!: string;
  email!: string;
  objetivo!: string;

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {}

  editar(): void {
      let usuario: Usuario = {
          id : this.id,
          nome: this.nome,
          email: this.email,
          objetivo: this.objetivo,
      };
      this.service.update(usuario).subscribe((usuario) => {
          console.log(usuario);
          this.router.navigate(["usuario/listar"]);
      });
  }

}
