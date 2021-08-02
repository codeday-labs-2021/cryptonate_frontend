import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, 
  HttpClient, 
  HttpInterceptor, 
  HTTP_INTERCEPTORS} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AuthGuard} from "./guards/auth.guard";
import {AddHeaderInterceptor} from "./interceptors/interceptor";
import { FormsModule } from '@angular/forms';

import * as WebSiteServices from './_services';
import * as Layout from './_layout';
import * as AdminContainer from './admin';
import * as Pages from './pages';
import * as Components from './_components';
import {Web3Service} from './_services/web3.service';


@NgModule({
  declarations: [
    AppComponent,
    ...Components.components,
    ...Layout.layouts,
   ...AdminContainer.components,
   ...Pages.pages,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule,
  ],
  providers: [
  ...WebSiteServices.services,
  Web3Service,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
