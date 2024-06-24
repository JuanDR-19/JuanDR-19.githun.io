import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';

const routes: Routes = [
  { path: '', component: MainComponent }, // Ruta inicial
  { path: 'about', component: AboutComponent },
  { path: 'pl', component: ProgrammingLanguagesComponent},
  { path: 'db', component: ProgrammingLanguagesComponent },
  { path: 'fw', component: ProgrammingLanguagesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Redirección para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
