import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPorteroComponent } from './detail-portero.component';

describe('DetailPorteroComponent', () => {
  let component: DetailPorteroComponent;
  let fixture: ComponentFixture<DetailPorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPorteroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
