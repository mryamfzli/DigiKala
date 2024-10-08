import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBasketComponent } from './buy-basket.component';

describe('BuyBasketComponent', () => {
  let component: BuyBasketComponent;
  let fixture: ComponentFixture<BuyBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
