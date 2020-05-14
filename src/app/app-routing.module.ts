import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaHeroesComponent } from './components/busqueda-heroes/busqueda-heroes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'busquedaHeroes/:busqueda', component: BusquedaHeroesComponent},
  {path: 'about', component: AboutComponent },
  {path: 'heroes', component: HeroesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
