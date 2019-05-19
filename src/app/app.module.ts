import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-components/app-root/app.component';
import { NotFoundComponent } from './root-components/not-found/not-found.component';
import { HeroesModule } from './heroes-module/heroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './root-components/compose-message/compose-message.component';
import { MessengerComponent } from './root-components/messenger/messenger.component';
import { AuthModule } from './auth-module/auth.module';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { AdminModule } from './admin-module/admin.module';
import { CrisisCenterModule } from './crisis-center-module/crisis-center-module.module';
import { ConfirmModule } from './comfirm-module/confirm.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    MessengerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    // CrisisCenterModule,
    ConfirmModule,
    // AdminModule,
    AuthModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
