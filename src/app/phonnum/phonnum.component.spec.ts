import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonnumComponent } from './phonnum.component';

describe('PhonnumComponent', () => {
  let component: PhonnumComponent;
  let fixture: ComponentFixture<PhonnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonnumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
