/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCvComponent } from './edit-cv.component';

describe('EditCvComponent', () => {
  let component: EditCvComponent;
  let fixture: ComponentFixture<EditCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
