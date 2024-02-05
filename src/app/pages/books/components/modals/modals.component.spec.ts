/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'

import { ModalsComponent } from './modals.component'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormGenerate } from 'src/app/shared/services/form.service'
import { SwalAlertService } from 'src/app/shared/services/swal-alert.service'
import { FormGroup } from '@angular/forms'

describe('ModalsComponent', () => {
  let component: ModalsComponent
  let fixture: ComponentFixture<ModalsComponent>

  // Mock objects and services
  const dialogRefMock = {
    close: jest.fn()
  }

  const formGenerateMock = {
    genInputNumber: jest.fn(),
    genInputString: jest.fn(),
    genInputDate: jest.fn()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: FormGenerate, useValue: formGenerateMock },
        { provide: MatDialogRef, useValue: dialogRefMock  },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        SwalAlertService
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should create form on initialization', () => {
    component.ngOnInit();
    expect(component.form).toBeInstanceOf(FormGroup);
  });

  // Add more tests for other methods and functionality of the component

  it('onClose should call dialogRef.close', () => {
    component.onClose();
    expect(dialogRefMock.close).toHaveBeenCalledWith({ close: true });
  });

  // Add more tests for other methods and functionality of the component
})
