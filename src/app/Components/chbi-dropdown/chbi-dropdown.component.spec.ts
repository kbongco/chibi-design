import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbiDropdownComponent } from './chbi-dropdown.component';

describe('ChbiDropdownComponent', () => {
  let component: ChbiDropdownComponent;
  let fixture: ComponentFixture<ChbiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChbiDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChbiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
