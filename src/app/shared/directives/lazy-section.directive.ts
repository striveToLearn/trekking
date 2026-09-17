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
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {

    // Fallback for browsers without IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      this.sectionVisible.emit();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        this.sectionVisible.emit();

        // The section only needs to be detected once
        this.observer?.unobserve(entry.target);
      },
      {
        root: null,
        rootMargin: '500px 0px',
        threshold: 0
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