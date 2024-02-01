import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingComponent } from './bidding.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';

describe('BiddingComponent', () => {
  let component: BiddingComponent;
  let fixture: ComponentFixture<BiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a field', () => {
    const inputElement =
      fixture.debugElement.nativeElement.querySelector('#bidControl');
    expect(inputElement).toBeDefined();
  });

  it('should validate', () => {
    const inputElement =
      fixture.debugElement.nativeElement.querySelector('#bidControl');
    const inputControl = component.bidControl;
    inputControl.setValue('');
    expect(inputElement.value).toEqual(inputControl.value);
    expect(inputControl.errors).not.toBeNull();
    expect(inputControl.errors?.['required']).toBeTruthy();
    inputControl.setValue('foo');
    expect(inputControl.errors?.['pattern']).toBeTruthy();
  });
});
