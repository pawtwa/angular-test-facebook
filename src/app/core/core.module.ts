import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostsModule } from '../posts/posts.module';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pl'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
