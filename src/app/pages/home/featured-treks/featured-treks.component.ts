import { Component } from '@angular/core';


@Component({
  selector: 'app-featured-treks',
  templateUrl: './featured-treks.component.html',
  styleUrls: ['./featured-treks.component.scss']
})
export class FeaturedTreksComponent {
featuredTreks = [

{
 id:1,
 name:"Everest Base Camp",
 location:"Nepal Himalayas",
 duration:14,
 altitude:"5364m",
 rating:4.9,
 image:"assets/everest_base_camp_home.jpg"
},

{
 id:2,
 name:"Kedarkantha Trek",
 location:"Uttarakhand Himalayas",
 duration:5,
 altitude:"12500ft",
 rating:4.8,
 image:"assets/kedarkantha_trek_home.jpg"
}

];



}