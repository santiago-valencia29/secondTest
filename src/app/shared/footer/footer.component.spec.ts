/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA
} from '@angular/core'

import { FooterComponent } from './footer.component'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
