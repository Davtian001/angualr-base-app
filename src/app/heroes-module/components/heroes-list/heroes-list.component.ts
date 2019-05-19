import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero-interface';
import { HeroService } from '../../hero.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;

  
  
  constructor(
    private heroService: HeroService,
    private acRoute: ActivatedRoute,
    ) { }


  ngOnInit() {
     this.heroes$ = this.heroService.getHeroes();
     this.selectedId = +this.acRoute.snapshot.paramMap.get('id');
    }

}
