/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  NO_ERRORS_SCHEMA
} from '@angular/core'

import { EmailComponent } from './email.component'
import { MatMenuModule } from '@angular/material/menu'
import { ShortNamePipe } from '../../pipes/short-name.pipe'

describe('EmailComponent', () => {
  let component: EmailComponent
  let fixture: ComponentFixture<EmailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [EmailComponent, ShortNamePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent)
    component = fixture.componentInstance

    // "Provide test data for the 'emails' property"
    component.emails = [
      { name: 'John', time: '10:00 AM', message: 'Hello' },
      { name: 'Alice', time: '11:00 AM', message: 'Hi there' }
    ]

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
