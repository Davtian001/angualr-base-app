import { NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetaliComponent } from './components/hero-detali/hero-detali.component';

const routes: Routes = [
  { path: 'heroes-list', component: HeroesListComponent, data: { animation: 'heroesList'} },
  { path: 'hero/:id', component: HeroDetaliComponent, data: { animation: 'hero'} },
  // { path: 'two', component: HeroesListComponent, outlet: 'popupTwo'},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
 