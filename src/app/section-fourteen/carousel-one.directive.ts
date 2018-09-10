import { Directive } from '@angular/core';
import { Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';

@Directive({
  selector: '[hsCarouselOne]',
  exportAs: 'hsCarouselOne'
})

export class CarouselOneDirective implements OnInit, OnDestroy {
  @Input() itemsLength: number;

  selectedIndex = 0;
  @Output('selectedIndex')  selectedIndexEmitter = new EventEmitter<number>();
  @Output('actualIndex')  actualIndexEmitter = new EventEmitter<number>();

  destroyed$ = new Subject();
  resetTimer$ = new Subject();
  ngOnInit() {
    this.resetTimer$
      .startWith(null)
      .takeUntil(this.destroyed$)
      .switchMap(t => Observable.timer(5000, 5000))
      .subscribe(() => this.next());
  }
  ngOnDestroy () {
    this.destroyed$.next();
  }
  actualIndex() {
    const len = this.itemsLength;
    // negative still return the right index
    return ((this.selectedIndex % len) + len) % len;
  }

  setIndex (index: number) {
    this.selectedIndex = index;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(index);
    this.resetTimer$.next();
  }

  previous () {
    --this.selectedIndex;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(this.selectedIndex);
    this.resetTimer$.next();
  }

  next () {
    ++this.selectedIndex;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(this.selectedIndex);
    this.resetTimer$.next();
  }
}
