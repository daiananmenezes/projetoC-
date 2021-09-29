import { AlterarDietComponent } from './components/diet/alterar-diet/alterar-diet.component';
import { RemoverDietComponent } from './components/diet/remover-diet/remover-diet.component';
import { ListarDietComponent } from './components/diet/listar-diet/listar-diet.component';
import { CadastrarDietComponent } from './components/diet/cadastrar-diet/cadastrar-diet.component';

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
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
  },
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
    path: "refeicao/cadastrar",
    component: CadastrarMealComponent
  },
  {
    path: "refeicao/listar",
    component: ListarMealComponent
  },
  {
    path: "refeicao/editar/:id",
    component: EditarMealComponent
  },
  {
    path: "refeicao/remover/:nome",
    component: RemoverMealComponent
  },

  // Dieta

  {
    path: "dieta/cadastrar",
    component: CadastrarDietComponent
  },
  {
    path: "dieta/listar",
    component: ListarDietComponent
  },
  {
    path: "dieta/editar/:id",
    component: AlterarDietComponent
  },
  {
    path: "dieta/remover/:title",
    component: RemoverDietComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
