import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { FormsModule } from '@angular/forms';
import { CrisisCenterRoutingModule } from './crisis-routing/crisis-center-routing.module';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ConfirmModule } from '../comfirm-module/confirm.module';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    // ConfirmModule
  ]
})
export class CrisisCenterModule { }
