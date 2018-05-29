import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavbarcontentComponent } from './leftnavbarcontent.component';

describe('LeftnavbarcontentComponent', () => {
  let component: LeftnavbarcontentComponent;
  let fixture: ComponentFixture<LeftnavbarcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavbarcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavbarcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
