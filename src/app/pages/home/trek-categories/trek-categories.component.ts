import { Component } from '@angular/core';

interface TrekCategory {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  trekCount: number;
  difficulty: string;
  icon: string;
}

@Component({
  selector: 'app-trek-categories',
  templateUrl: './trek-categories.component.html',
  styleUrls: ['./trek-categories.component.scss']
})
export class TrekCategoriesComponent {


  trekCategories = [

{
 id:1,
 title:"Himalayan Treks",
 subtitle:"Explore the majestic Himalayas",
 image:"assets/himalayan_treks.jpg",
 trekCount:120,
 difficulty:"Moderate",
 icon:"🏔"
},


{
 id:2,
 title:"Weekend Escapes",
 subtitle:"Short adventures near you",
 image:"assets/images/treks/weekend.jpg",
 trekCount:45,
 difficulty:"Easy",
 icon:"🥾"
},


{
 id:3,
 title:"High Altitude",
 subtitle:"Above the clouds",
 image:"assets/images/treks/high-altitude.jpg",
 trekCount:80,
 difficulty:"Hard",
 icon:"⛰"
},


{
 id:4,
 title:"Wild Trails",
 subtitle:"Into the wilderness",
 image:"assets/images/treks/wildlife.jpg",
 trekCount:35,
 difficulty:"Easy",
 icon:"🌲"
},


{
 id:5,
 title:"Backpacking",
 subtitle:"Discover hidden paths",
 image:"assets/images/treks/backpacking.jpg",
 trekCount:60,
 difficulty:"Moderate",
 icon:"🎒"
},


{
 id:6,
 title:"International",
 subtitle:"Beyond Indian mountains",
 image:"assets/images/treks/international.jpg",
 trekCount:25,
 difficulty:"Hard",
 icon:"🌎"
}

];

}