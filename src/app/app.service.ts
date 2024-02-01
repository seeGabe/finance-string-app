import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentBidSignal = signal<string>('');
}
