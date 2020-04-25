import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularComponentsModule} from './angular-components/angular-components.module';
import { StartPageComponent } from './start-page/start-page.component';

@NgModule({
   declarations: [
      AppComponent,
      StartPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      AngularComponentsModule,
      HttpClientModule,
      BrowserAnimationsModule

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
