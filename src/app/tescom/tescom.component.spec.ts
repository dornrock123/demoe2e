import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TescomComponent } from './tescom.component';

describe('TescomComponent', () => {
  let component: TescomComponent;
  let fixture: ComponentFixture<TescomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TescomComponent]
    });
    fixture = TestBed.createComponent(TescomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
