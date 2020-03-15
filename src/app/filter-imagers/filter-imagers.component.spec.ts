import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterImagersComponent } from './filter-imagers.component';

describe('FilterImagersComponent', () => {
  let component: FilterImagersComponent;
  let fixture: ComponentFixture<FilterImagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterImagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterImagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
