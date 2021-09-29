
import { RemoverMealComponent } from './components/meal/remover-meal/remover-meal.component';
import { EditarMealComponent } from './components/meal/editar-meal/editar-meal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarMealComponent} from './components/meal/cadastrar-meal/cadastrar-meal.component'
import {ListarMealComponent} from './components/meal/listar-meal/listar-meal.component'

import { CadastrarUsuarioComponent } from "./components/usuario/cadastrar-usuario/cadastrar-usuario.component";
import { EditarUsuarioComponent } from "./components/usuario/editar-usuario/editar-usuario.component";
import { ListarUsuarioComponent } from "./components/usuario/listar-usuario/listar-usuario.component";
import { RemoverUsuarioComponent } from "./components/usuario/remover-usuario/remover-usuario.component";

const routes: Routes = [
  // Usuario
  {
    path: "usuario/listar",
    component: ListarUsuarioComponent,
  },
  {
    path: "usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },
  {
    path: "usuario/editar/:id",
    component: EditarUsuarioComponent,
  },
  {
    path: "usuario/remover/:nome",
    component: RemoverUsuarioComponent,
  },
  
  // Meal
  {
    path: "meal/create",
    component: CadastrarMealComponent
  },
  {
    path: "meal/list",
    component: ListarMealComponent
  },
  {
    path: "meal/getbyid/:id",
    component: ListarMealComponent
  },
  {
    path: "meal/update/:id",
    component: EditarMealComponent
  },
  {
    path: "meal/delete/:nome",
    component: RemoverMealComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
