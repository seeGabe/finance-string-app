import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ViewingComponent } from './viewing.component';

describe('ViewingComponent', () => {
  let component: ViewingComponent;
  let fixture: ComponentFixture<ViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should parse the string array value', fakeAsync(() => {
    component.currentBid = ['.', '5', 'b'];
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.displayBid).toEqual('500000000');
  }));
});
