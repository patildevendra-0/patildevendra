import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<boolean>();

  scrollToTop() {
    this.scrollSubject.next(true);
  }

  getScrollSubject() {
    return this.scrollSubject.asObservable();
  }
}
