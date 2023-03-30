import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbiModalComponent } from './chbi-modal.component';

describe('ChbiModalComponent', () => {
  let component: ChbiModalComponent;
  let fixture: ComponentFixture<ChbiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbiModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChbiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
