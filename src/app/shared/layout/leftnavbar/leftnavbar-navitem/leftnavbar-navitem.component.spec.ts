import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavbarNavitemComponent } from './leftnavbar-navitem.component';

describe('LeftnavbarNavitemComponent', () => {
  let component: LeftnavbarNavitemComponent;
  let fixture: ComponentFixture<LeftnavbarNavitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftnavbarNavitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavbarNavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
