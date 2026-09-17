import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';





@NgModule({
  declarations: [
    ScrollRevealDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
