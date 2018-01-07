import { Observable } from 'rxjs/Observable';

export abstract class ShowCounterInterface {
  abstract counter$: Observable<number>;
}
