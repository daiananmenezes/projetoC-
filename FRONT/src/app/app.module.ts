import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';

import { CadastrarDietComponent } from './components/diet/cadastrar-diet/cadastrar-diet.component';
import { ListarDietComponent } from './components/diet/listar-diet/listar-diet.component';
import { AlterarDietComponent } from './components/diet/alterar-diet/alterar-diet.component';
import { TemplateComponent } from "./components/template/template.component";

import { CadastrarMealComponent } from './components/meal/cadastrar-meal/cadastrar-meal.component';
import { ListarMealComponent } from './components/meal/listar-meal/listar-meal.component';
import { EditarMealComponent } from './components/meal/editar-meal/editar-meal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MostrarDietComponent } from './components/diet/mostrar-diet/mostrar-diet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    CadastrarDietComponent,
    ListarDietComponent,
    AlterarDietComponent,
    CadastrarMealComponent,
    ListarMealComponent,
    EditarMealComponent,
    HomeComponent,
    MostrarDietComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
