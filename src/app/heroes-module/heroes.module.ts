import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetaliComponent } from './components/hero-detali/hero-detali.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetaliComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    ]
})
export class HeroesModule { }
   