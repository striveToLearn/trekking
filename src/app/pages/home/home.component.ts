import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
trekCategoriesLoaded = false;
featuredTreksLoaded = false;
loadTrekCategories(): void {
  this.trekCategoriesLoaded = true;
}

loadFeaturedTreks(): void {
  this.featuredTreksLoaded = true;
}
}
