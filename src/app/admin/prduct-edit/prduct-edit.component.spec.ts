import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductEditComponent } from './prduct-edit.component';

describe('PrductEditComponent', () => {
  let component: PrductEditComponent;
  let fixture: ComponentFixture<PrductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
