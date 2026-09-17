import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective implements AfterViewInit {

  @Input('appCountUp') target: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {

    const target = Number(this.target);
    let current = 0;

    const interval = setInterval(() => {

      current += Math.ceil(target / 60);

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      this.el.nativeElement.textContent = current;

    }, 20);
  }
}