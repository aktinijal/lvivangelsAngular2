/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FederationComponent } from './federation.component';

describe('FederationComponent', () => {
  let component: FederationComponent;
  let fixture: ComponentFixture<FederationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
