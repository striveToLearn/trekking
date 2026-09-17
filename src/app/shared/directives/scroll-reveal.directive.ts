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
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {

    // Fallback for browsers without IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      this.elementRef.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        this.elementRef.nativeElement.classList.add('is-visible');

        // Animate only once
        this.observer?.unobserve(entry.target);
      },
      {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.elementRef.nativeElement
    );
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
  }
}