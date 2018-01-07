import { Injectable } from '@angular/core';
import { ChangeCounterInterface } from '../../interface/change-counter.interface';
import { ShowCounterInterface } from '../../interface/show-counter.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterService implements ChangeCounterInterface, ShowCounterInterface {
  private store$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.store$;

  addOne(): void {
    this.store$.next(this.store$.getValue() + 1);
  }

  minusOne(): void {
    this.store$.next(this.store$.getValue() - 1);
  }
}
