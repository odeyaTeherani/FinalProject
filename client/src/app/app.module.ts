import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {InMemHeroService} from './shared/services/in-memory-db-service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    environment.production ?
      [] : HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
