import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { TrekCategoriesComponent } from './pages/home/trek-categories/trek-categories.component';
import { FeaturedTreksComponent } from './pages/home/featured-treks/featured-treks.component';
import { LazySectionDirective } from './shared/directives/lazy-section.directive';
import { ScrollRevealDirective } from './shared/directives/scroll-reveal.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    TopbarComponent,
    TrekCategoriesComponent,
    FeaturedTreksComponent,
    LazySectionDirective,
    ScrollRevealDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
