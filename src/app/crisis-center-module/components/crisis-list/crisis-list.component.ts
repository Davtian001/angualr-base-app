import { Component, OnInit } from '@angular/core';
import { CrisisService } from '../../crisis.service';
import { Observable } from 'rxjs';
import { Crisis } from '../../crisis-interfaces';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
 
  constructor(
    private acRouteSnapshot: ActivatedRoute,
    private crisisService: CrisisService
    ) { }

  ngOnInit() {
   this.crises$ = this.acRouteSnapshot.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      })
    )

  }

} 
