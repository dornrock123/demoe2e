import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcomComponent } from './tcom.component';

describe('TcomComponent', () => {
  let component: TcomComponent;
  let fixture: ComponentFixture<TcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcomComponent]
    });
    fixture = TestBed.createComponent(TcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
