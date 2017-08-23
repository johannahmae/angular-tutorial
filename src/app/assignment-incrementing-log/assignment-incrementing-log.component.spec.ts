import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentIncrementingLogComponent } from './assignment-incrementing-log.component';

describe('AssignmentIncrementingLogComponent', () => {
  let component: AssignmentIncrementingLogComponent;
  let fixture: ComponentFixture<AssignmentIncrementingLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentIncrementingLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentIncrementingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
