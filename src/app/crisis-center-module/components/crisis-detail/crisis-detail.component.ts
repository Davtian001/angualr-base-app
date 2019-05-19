import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { Crisis } from '../../crisis-interfaces';
import { ConfirmDialogService } from 'src/app/comfirm-module/services/confirm-dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],

})
export class CrisisDetailComponent implements OnInit {



  crisis: Crisis;
  editName: string; 

  candeactivate = new Subject<boolean>()

  constructor(
    private router: Router,
    private acRoute: ActivatedRoute,
    private confirmDialog: ConfirmDialogService
    ) { }

 
  ngOnInit() {
    this.acRoute.data.subscribe((data: {crisis: Crisis}) => {
      this.crisis = data.crisis;
      this.editName = data.crisis.name;
    })
  }



  skipChanges(canDeactivate: boolean = true){
    this.candeactivate.next(canDeactivate);
    this.candeactivate.complete();
  }
 

  confirmMessage(){
    this.confirmDialog.openDialogMessage({
      message: ['Skip Your Changes'],
      accept: this.skipChanges.bind(this),
    })
  }

  save(): void {
    this.editName ? this.crisis.name = this.editName : null
    this.goBack();
  }

  cancel(): void {
    this.goBack(); // poxum rout dra hamarel harcnuma
  }

  goBack(): void { // close rename dialog 
    this.router.navigate(['../', { id: this.crisis.id } ], { relativeTo: this.acRoute });
  }
  

  /**
   * @description Guard Function
   * @param component 
   * @param route 
   * @param state 
   */
  canDeactivateComponent(
    component: CrisisDetailComponent,
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Promise<boolean> | boolean {

      if(!component.crisis || !component.editName || component.crisis.name === component.editName) return true;

      else {
        component.confirmMessage();
        return this.candeactivate.toPromise();
      }
  }
}


// return !component.crisis || component.crisis.name === component.editName ? true : component.confirmMessage();
// }