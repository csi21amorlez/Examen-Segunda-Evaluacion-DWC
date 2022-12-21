import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPorterosComponent } from './list-porteros.component';

describe('ListPorterosComponent', () => {
  let component: ListPorterosComponent;
  let fixture: ComponentFixture<ListPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPorterosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
