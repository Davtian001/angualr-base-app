import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CRISES } from './mock-crises';
import { Crisis } from './crisis-interfaces';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  getCrises(): Observable<Crisis[]> {
    return of(CRISES)  
  }

  getCrisesById(id: string | number): Observable<Crisis> {
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    )
  }


}
