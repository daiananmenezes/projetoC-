import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { RemoverUsuarioComponent } from './components/usuario/remover-usuario/remover-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';
import { CadastrarDietComponent } from './components/diet/cadastrar-diet/cadastrar-diet.component';
import { ListarDietComponent } from './components/diet/listar-diet/listar-diet.component';
import { AlterarDietComponent } from './components/diet/alterar-diet/alterar-diet.component';
import { RemoverDietComponent } from './components/diet/remover-diet/remover-diet.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent,
    RemoverUsuarioComponent,
    ListarUsuarioComponent,
    CadastrarDietComponent,
    ListarDietComponent,
    AlterarDietComponent,
    RemoverDietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
