import { RemoverMealComponent } from './components/meal/remover-meal/remover-meal.component';
import { EditarMealComponent } from './components/meal/editar-meal/editar-meal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarMealComponent} from './components/meal/cadastrar-meal/cadastrar-meal.component'
import {ListarMealComponent} from './components/meal/listar-meal/listar-meal.component'


const routes: Routes = [
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
