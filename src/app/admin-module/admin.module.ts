import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../admin-module/components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from '../admin-module/components/admin/admin.component';
import { ManageCrisesComponent } from '../admin-module/components/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from '../admin-module/components/manage-heroes/manage-heroes.component';
import { AdminRoutingModule } from '../admin-module/admin-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
