import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { CountUpDirective } from './directives/count-up.directive';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    ScrollRevealDirective,
    CountUpDirective,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
