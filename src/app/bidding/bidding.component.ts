import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bidding',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './bidding.component.html',
})
export class BiddingComponent {
  appService = inject(AppService);
  hasError = false;
  bidControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/\d+[bkmt]|[.]+\d+[bkmt]/),
    ],
  });

  onSubmit(): void {
    if (this.bidControl.valid) {
      this.hasError = false;
      this.appService.currentBidSignal.set(this.bidControl.value);
    } else {
      this.hasError = true;
    }
  }
}
