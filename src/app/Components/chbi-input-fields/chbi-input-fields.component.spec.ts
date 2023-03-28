import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbiInputFieldsComponent } from './chbi-input-fields.component';

describe('ChbiInputFieldsComponent', () => {
  let component: ChbiInputFieldsComponent;
  let fixture: ComponentFixture<ChbiInputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbiInputFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChbiInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
