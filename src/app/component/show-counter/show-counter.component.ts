import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShowCounterInterface } from '../../interface/show-counter.interface';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowValueComponent {
  counter$: Observable<number> = this.counterService.counter$;

  constructor(private counterService: ShowCounterInterface) { }
}
