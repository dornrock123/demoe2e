import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecomComponent } from './tecom.component';

describe('TecomComponent', () => {
  let component: TecomComponent;
  let fixture: ComponentFixture<TecomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecomComponent]
    });
    fixture = TestBed.createComponent(TecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
