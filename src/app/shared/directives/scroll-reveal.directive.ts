import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective
  implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            console.log(
              '[ScrollReveal] Section visible:',
              entry.target
            );

            entry.target.classList.add('is-visible');

            console.log(
              '[ScrollReveal] Added is-visible'
            );

            this.observer?.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    this.observer.observe(
      this.elementRef.nativeElement
    );
  }

  ngOnDestroy(): void {

    this.observer?.disconnect();
  }
}