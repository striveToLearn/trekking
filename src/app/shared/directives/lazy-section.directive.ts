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
export class LazySectionDirective implements AfterViewInit, OnDestroy {

  @Output() sectionVisible = new EventEmitter<void>();

  private observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      (entries) => {

        const entry = entries[0];

        if (entry.isIntersecting) {

          this.sectionVisible.emit();

          this.observer.disconnect();
        }

      },
      {
        rootMargin: '300px 0px',
        threshold: 0
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {

    if (this.observer) {
      this.observer.disconnect();
    }

  }
}