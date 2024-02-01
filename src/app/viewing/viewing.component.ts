import { Component, OnInit, computed, inject } from '@angular/core';
import { AppService } from '../app.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-viewing',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './viewing.component.html',
})
export class ViewingComponent implements OnInit {
  appService = inject(AppService);
  displayBid = '';
  hasPoint = false;
  currentBid: string[] = this.appService
    .currentBidSignal()
    .toString()
    .split('');

  ngOnInit(): void {
    this.currentBid.forEach((char) => this.processData(char));
  }

  processData(data: string) {
    switch (data) {
      case '.':
        this.hasPoint = true;
        break;

      case 'k':
        this.hasPoint ? (this.displayBid += '00') : (this.displayBid += '000');
        this.hasPoint = false;
        break;

      case 'm':
        this.hasPoint
          ? (this.displayBid += '00000')
          : (this.displayBid += '000000');
        this.hasPoint = false;
        break;

      case 'b':
        this.hasPoint
          ? (this.displayBid += '00000000')
          : (this.displayBid += '000000000');
        this.hasPoint = false;
        break;

      case 't':
        this.hasPoint
          ? (this.displayBid += '00000000000')
          : (this.displayBid += '000000000000');
        this.hasPoint = false;
        break;

      default:
        this.displayBid += data;
        break;
    }
  }
}
