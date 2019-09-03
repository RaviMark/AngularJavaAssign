import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeanComponent } from './register-bean.component';

describe('RegisterBeanComponent', () => {
  let component: RegisterBeanComponent;
  let fixture: ComponentFixture<RegisterBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
