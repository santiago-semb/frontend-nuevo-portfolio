import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  // RUTA POR DEFECTO
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  // RESTO DE RUTAS
  {path:'inicio', component:InicioComponent},
  {path:'estudios', component:EstudiosComponent},
  {path:'certificados', component:CertificadosComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'sobre-mi', component:SobreMiComponent},
  {path:'proyectos', component:ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
