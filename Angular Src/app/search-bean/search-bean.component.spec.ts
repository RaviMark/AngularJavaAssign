import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeanComponent } from './search-bean.component';

describe('SearchBeanComponent', () => {
  let component: SearchBeanComponent;
  let fixture: ComponentFixture<SearchBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
