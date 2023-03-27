import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbiButtonComponent } from './chbi-button.component';

describe('ChbiButtonComponent', () => {
  let component: ChbiButtonComponent;
  let fixture: ComponentFixture<ChbiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChbiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
