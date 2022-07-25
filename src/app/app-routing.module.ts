import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component'

const routes: Routes = [
  {path:'', component:PorfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
