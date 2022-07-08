import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductCreateComponent } from './prduct-create.component';

describe('PrductCreateComponent', () => {
  let component: PrductCreateComponent;
  let fixture: ComponentFixture<PrductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
