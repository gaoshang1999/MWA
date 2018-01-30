import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyliComponent } from './myli.component';

describe('MyliComponent', () => {
  let component: MyliComponent;
  let fixture: ComponentFixture<MyliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
