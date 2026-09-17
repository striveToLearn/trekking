import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';

@Directive({
  selector: '[appLazySection]'
})
export class LazySectionDirective
  implements AfterViewInit, OnDestroy {

  @Output() sectionVisible = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef
  ) {
    console.log(
      '🟡 [LazySection] Directive created:',
      this.elementRef.nativeElement
    );
  }

  ngAfterViewInit(): void {

    console.log(
      '🔵 [LazySection] ngAfterViewInit:',
      this.elementRef.nativeElement
    );

    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          console.log(
            '👀 [LazySection] Intersection detected:',
            {
              element: entry.target,
              isIntersecting: entry.isIntersecting,
              ratio: entry.intersectionRatio
            }
          );

          if (entry.isIntersecting) {

            console.log(
              '🟢 [LazySection] SECTION VISIBLE!'
            );

            this.sectionVisible.emit();

            console.log(
              '🚀 [LazySection] sectionVisible emitted'
            );

            this.observer?.unobserve(
              entry.target
            );

          }

        });

      },
      {
        root: null,

        // For testing, use 0 first
        rootMargin: '0px',

        threshold: 0
      }
    );

    this.observer.observe(
      this.elementRef.nativeElement
    );

    console.log(
      '🔎 [LazySection] Now observing:',
      this.elementRef.nativeElement
    );
  }

  ngOnDestroy(): void {

    console.log(
      '🔴 [LazySection] Directive destroyed'
    );

    this.observer?.disconnect();
  }
}