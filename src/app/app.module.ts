import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AuthModule } from './modules/auth/auth.module';
import { EventsModule } from './modules/events/events.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserChipComponent } from './shared/components/user-chip/user-chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AuthModule,
    EventsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
