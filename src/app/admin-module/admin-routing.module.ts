import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ManageCrisesComponent } from './components/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './components/manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth-module/guards/auth.guard';

const routes: Routes = [

  { path: '', component: AdminComponent, canActivate: [AuthGuard], children: [

    { path: '', canActivateChild: [AuthGuard],  children: [ // optional for guard 
      
      { path: '', component: AdminDashboardComponent },   
      { path: 'crises', component: ManageCrisesComponent },
      { path: 'heroes', component: ManageHeroesComponent }
    ] }
  ]}




//   { path: 'admin', component: AdminComponent,
//     canActivate: [AuthGuard],
//     children: [

//       { path: '', canActivateChild: [AuthGuard], children: [ // optional

//         { path: 'crises', component: ManageCrisesComponent },
//         { path: 'heroes', component: ManageHeroesComponent },
//         { path: '', component: AdminDashboardComponent },
//       ]},
//     ]
//   }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
