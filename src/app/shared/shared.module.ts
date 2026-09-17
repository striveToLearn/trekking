import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { CountUpDirective } from './directives/count-up.directive';





@NgModule({
  declarations: [
    ScrollRevealDirective,
    CountUpDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
