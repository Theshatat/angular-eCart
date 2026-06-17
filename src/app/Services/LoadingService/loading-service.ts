import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingCount.asObservable();

  show() {
    this.loadingCount.next(true);
  }

  hide() {
    this.loadingCount.next(false);
  }
}
