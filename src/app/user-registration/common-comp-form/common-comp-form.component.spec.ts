import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompFormComponent } from './common-comp-form.component';

describe('CommonCompFormComponent', () => {
  let component: CommonCompFormComponent;
  let fixture: ComponentFixture<CommonCompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonCompFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
