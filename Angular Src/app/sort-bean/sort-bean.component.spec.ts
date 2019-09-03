import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBeanComponent } from './sort-bean.component';

describe('SortBeanComponent', () => {
  let component: SortBeanComponent;
  let fixture: ComponentFixture<SortBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
