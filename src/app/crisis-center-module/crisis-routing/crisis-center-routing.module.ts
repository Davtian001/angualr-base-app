import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from '../components/crisis-center/crisis-center.component';
import { CrisisListComponent } from '../components/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from '../components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from '../components/crisis-center-home/crisis-center-home.component';
import { CanDeactivateGuard } from '../../auth-module/guards/can-deactivate.guard';
import { AuthGuard } from '../../auth-module/guards/auth.guard';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [

  { path: '', component: CrisisCenterComponent, canActivate:[AuthGuard], children: [ // childs 1x

      { path: '', component: CrisisListComponent, canActivateChild:[AuthGuard], children: [ // childs 2x ete es activa deafalut
          // urem akriva CrisisCenterHom ->  ''

          { path: '', component: CrisisCenterHomeComponent },

          { path: ':id', component: CrisisDetailComponent, canDeactivate: [CanDeactivateGuard],
           resolve: { crisis: CrisisDetailResolverService }
          // data: {anyData: 'hshblsgdrg}
           // Напомним, что вы можете добавить что угодно к dataсвойству маршрута.
          }]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
