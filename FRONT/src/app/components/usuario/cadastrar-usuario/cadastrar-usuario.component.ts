import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/usuario";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  nome!: string;
  email!: string;
  objetivo!: string;

  constructor(private router: Router, private service: UsuarioService) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let usuario: Usuario = {
          nome: this.nome,
          email: this.email,
          objetivo: this.objetivo,
      };
      this.service.create(usuario).subscribe((usuario) => {
          console.log(usuario);
          this.router.navigate(["usuario/listar"]);
      });
  }

}
