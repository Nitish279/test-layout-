import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentAuthorityComponent } from './commitment-authority.component';

describe('CommitmentAuthorityComponent', () => {
  let component: CommitmentAuthorityComponent;
  let fixture: ComponentFixture<CommitmentAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitmentAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
