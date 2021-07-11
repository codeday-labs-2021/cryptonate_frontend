import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import * as websiteComponents from './website';

import { AppComponent } from './app.component';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminComponent } from './website/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, ...websiteComponents.components, AdminComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ ...websiteComponents.components]
})
export class AppModule {}
