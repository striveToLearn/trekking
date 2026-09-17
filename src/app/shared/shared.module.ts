import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';





@NgModule({
  declarations: [
    TopbarComponent,
    ScrollRevealDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
