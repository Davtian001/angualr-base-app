import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SelectivePreloadingStrategyService } from 'src/app/services/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  sessionId$: Observable<string>;
  token$: Observable<string>;
  modules: string[];


  constructor(
    private acRoute: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategyService
    ) {
    this.modules = this.preloadStrategy.preloadedModules;
  }

  ngOnInit() {
  // console.log(this.modules)
  //   console.log(this.acRoute.fragment, 'fragemenyts')
  //   // Capture the session ID if available
  //   this.sessionId$ = this.acRoute.queryParamMap.pipe(
  //     map(params => params.get('session_id') || 'None')
  //   )

  //  // Capture the fragment if available
  //     this.token$ = this.acRoute.fragment.pipe(
  //       map(fragment => fragment || 'None')
  //     )
  }
}
