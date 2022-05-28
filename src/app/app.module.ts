import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Importado para o projeto
import { HttpClientModule } from '@angular/common/http'; //Importado para o projeto
import { Routes, RouterModule } from '@angular/router'; //Importado para o projeto
import { NgxPaginationModule } from 'ngx-pagination'; //Importado para o projeto

import { AppComponent } from './app.component';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { EmpresasConsultaComponent } from './empresas-consulta/empresas-consulta.component';
import { EmpresasEdicaoComponent } from './empresas-edicao/empresas-edicao.component';

//mapeamento das rotas (URLs) do projeto
const routes : Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'empresas-consulta'  },
  { path : 'empresas-cadastro', component: EmpresasCadastroComponent },
  { path : 'empresas-consulta', component: EmpresasConsultaComponent },
  { path : 'empresas-edicao/:idEmpresa', component : EmpresasEdicaoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmpresasCadastroComponent,
    EmpresasConsultaComponent,
    EmpresasEdicaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Importado para o projeto
    ReactiveFormsModule, //Importado para o projeto
    HttpClientModule, //Importado para o projeto
    RouterModule.forRoot(routes), //Importado para o projeto
    NgxPaginationModule //Importado para o projeto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
