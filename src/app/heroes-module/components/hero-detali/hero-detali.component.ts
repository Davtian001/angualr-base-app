import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../hero-interface';
import { HeroService } from '../../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detali',
  templateUrl: './hero-detali.component.html',
  styleUrls: ['./hero-detali.component.scss']
})
export class HeroDetaliComponent implements OnInit, OnDestroy {
  hero$: Observable<Hero>
  heroId: number;
  heroInd: number;
  heroesCount: number;

  constructor(
    private acRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
  ) { }


  ngOnInit() {		console.log('​e.snapshot.paramMap', this.acRoute.snapshot.paramMap)
    this.hero$ = this.getHeroById();
    this.heroId = +this.acRoute.snapshot.paramMap.get('id');
    this.heroInd = +this.acRoute.snapshot.paramMap.get('ind');
    this.heroesCount = +this.acRoute.snapshot.paramMap.get('count');
  }


  goToBack(heroId: Hero) {
    this.router.navigate(['/heroes-list', { id: heroId.id }])
  }

  nextHero(): void {
    this.heroInd < this.heroesCount ? this.heroId++ : null
    this.hero$ = this.getHeroById(this.heroId)
  }
  
  prevHero(): void {
    this.heroInd > 0 ? this.heroId-- : null
    this.hero$ = this.getHeroById(this.heroId)
  }

  
  getHeroById(id?: number | string): Observable<Hero> {

    return this.acRoute.paramMap.pipe(

      switchMap((params: ParamMap) => {
        return this.heroService.getHero(id ? id : params.get('id'))
      })
    )
    /*
     * Ete ogtagorvelua 1 angam karanq subscrib clinenq chetevenq popooxutyunnerin maingamic vercnenq arjeq@ ( /:id )
       const id = this.acRoute.snapshot.paramMap.get('id');
       this.hero$ = this.service.getHero(id);
     */
  }

  ngOnDestroy() {

  }
}
