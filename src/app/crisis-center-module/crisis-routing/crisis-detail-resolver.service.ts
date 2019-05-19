import { Injectable } from '@angular/core';
import { CrisisService } from '../crisis.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Crisis } from '../crisis-interfaces';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis> {

  constructor(private cs: CrisisService, private route: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
   
      return this.cs.getCrisesById(route.paramMap.get('id')).pipe(
        take(1),
        switchMap(crisis => {
          console.log('resolve data for rout')
          if(crisis) return of(crisis);
          
          else {
            this.route.navigate(['/crisis-center'])
            return EMPTY
          }
        })
    )
  } 
}
