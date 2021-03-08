import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOneProductComponent } from './add-one-product.component';

describe('AddOneProductComponent', () => {
  let component: AddOneProductComponent;
  let fixture: ComponentFixture<AddOneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOneProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
