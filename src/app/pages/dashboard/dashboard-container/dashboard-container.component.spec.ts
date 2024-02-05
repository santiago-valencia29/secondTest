/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA
} from '@angular/core'

import { DashboardContainerComponent } from './dashboard-container.component'

describe('Module1ContainerComponent', () => {
  let component: DashboardContainerComponent
  let fixture: ComponentFixture<DashboardContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
