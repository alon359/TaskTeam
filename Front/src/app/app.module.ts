import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing Moudle
import { AppRoutingModule } from './app-routing.module';

// app component
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Components


// Pages


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
