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
  console.log('Loading Trek Categories...');
  this.trekCategoriesLoaded = true;
}

loadFeaturedTreks(): void {
  console.log('Loading Featured Treks...');
  this.featuredTreksLoaded = true;
}
}
