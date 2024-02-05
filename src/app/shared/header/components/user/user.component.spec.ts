/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core'

import { UserComponent } from './user.component'
import { MatMenuModule } from '@angular/material/menu'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [UserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a user input property', () => {
    component.user = { name: 'John' };
    expect(component.user).toBeDefined();
  });

  it('should have a signOut output property', () => {
    expect(component.signOut).toBeDefined();
  });

  it('should emit an event when signOut is called', () => {
    // Arrange
    let eventEmitted = false;
    component.signOut.subscribe(() => {
      eventEmitted = true;
    });

    // Act
    component.signOut.emit();

    // Assert
    expect(eventEmitted).toBeTruthy();
  });
})
