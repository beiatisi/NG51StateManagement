import { Component } from '@angular/core';
import { ChangeCounterInterface } from '../../interface/change-counter.interface';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-counter.component.html',
  styleUrls: ['./change-counter.component.css']
})
export class ChangeCounterComponent {

  constructor(private counterService: ChangeCounterInterface) { }

  onIncrementClick() {
    this.counterService.addOne();
  }

  onDecrementClick() {
    this.counterService.minusOne();
  }
}
