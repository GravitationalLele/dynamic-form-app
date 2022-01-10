import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputFormComponent } from './data-input-form.component';

describe('DataInputFormComponent', () => {
  let component: DataInputFormComponent;
  let fixture: ComponentFixture<DataInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
