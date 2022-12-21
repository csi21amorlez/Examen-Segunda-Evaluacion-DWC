import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPorterosComponent } from './form-porteros.component';

describe('FormPorterosComponent', () => {
  let component: FormPorterosComponent;
  let fixture: ComponentFixture<FormPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPorterosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
