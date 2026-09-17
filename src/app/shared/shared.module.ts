import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LazySectionDirective } from './directives/lazy-section.directive';




@NgModule({
  declarations: [
    TopbarComponent,
    LazySectionDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
