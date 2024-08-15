import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcomComponent } from './testcom.component';

describe('TestcomComponent', () => {
  let component: TestcomComponent;
  let fixture: ComponentFixture<TestcomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcomComponent]
    });
    fixture = TestBed.createComponent(TestcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
