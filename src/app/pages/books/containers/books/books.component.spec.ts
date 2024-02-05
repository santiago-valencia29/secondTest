import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing'
import { BooksComponent } from './bookscomponent'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table'
import { SwalAlertService } from 'src/app/shared/services/swal-alert.service'
import { ProjectService } from '../../services/book.service'
import { Project } from '../../models/book.model'
import { of, throwError } from 'rxjs'
import { ModalsComponent } from '../../components/modals/modals.component'
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator'

describe('UiElementsComponent', () => {
  let component: BooksComponent
  let fixture: ComponentFixture<BooksComponent>
  let projectService: ProjectService
  let swalAlertService: SwalAlertService
  let matDialog: MatDialog
  let dialogRefMock: MatDialogRef<BooksComponent>

  const dummyProjects: Project[] = [
    {
      _id: '1',
      name: 'Project 1',
      description: 'Project 1 description',
      category: 'Category 1',
      year: 2022,
      langs: 'JavaScript',
      image: 'image1.jpg'
    },
    {
      _id: '2',
      name: 'Project 2',
      description: 'Project 2 description',
      category: 'Category 2',
      year: 2023,
      langs: 'TypeScript',
      image: 'image2.jpg'
    },
    {
      _id: '3',
      name: 'Project 3',
      description: 'Project 3 description',
      category: 'Category 1',
      year: 2021,
      langs: 'Java',
      image: 'image3.jpg'
    }
  ]

  const swalAlertServiceMock = {
    loading: jest.fn(),
    swalAlertClose: jest.fn(),
    toast: jest.fn()
  }

  const projectServiceMock = {
    getProjects: jest.fn(() => of({ projects: dummyProjects }))
  }

  beforeEach(async(() => {
    dialogRefMock = {} as MatDialogRef<BooksComponent>

    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: dialogRefMock },
        {
          provide: ProjectService,
          useValue: {
            getProjects: () => of({ projects: dummyProjects }),
            projectSignal: {
              set: (value: any) => {
                // Implement set logic if necessary
              }
            }
          }
        },
        { provide: SwalAlertService, useValue: swalAlertServiceMock },
        {
          provide: MatDialog,
          useValue: {
            open: jest.fn(() => ({
              afterClosed: jest.fn(() => of(undefined)),
              backdropClick: jest.fn(() => of(new MouseEvent('click'))),
              close: jest.fn()
            }))
          }
        }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent)
    component = fixture.componentInstance
    projectService = TestBed.inject(ProjectService)
    swalAlertService = TestBed.inject(SwalAlertService)
    matDialog = TestBed.inject(MatDialog)
    jest.clearAllMocks()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get and set projects', fakeAsync(() => {
    // Simulate the service response with test data
    jest.spyOn(projectService, 'getProjects').mockReturnValue(of(dummyProjects))
    jest.spyOn(swalAlertService, 'loading').mockImplementation(() => {})
    jest.spyOn(swalAlertService, 'swalAlertClose').mockImplementation(() => {})
    jest.spyOn(swalAlertService, 'toast').mockImplementation(() => {})

    component.getProjects() // Call the getProjects method

    // Wait for asynchronous operations to finish
    tick()

    // Make expectations to verify that the data has been set correctly
    expect(component.projects).toEqual(dummyProjects)
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource)
    expect(component.dataSource.data).toEqual(dummyProjects)

    // Ensure that service and alert service methods were called correctly
    expect(projectService.getProjects).toHaveBeenCalled()
    expect(swalAlertService.loading).toHaveBeenCalled()
    expect(swalAlertService.swalAlertClose).toHaveBeenCalled()
  }))

  it('should handle error and call toast', fakeAsync(() => {
    // Simulate the service returning an error
    const errorResponse = { message: 'Error message' }
    jest
      .spyOn(projectService, 'getProjects')
      .mockReturnValue(throwError(errorResponse)) // Import throwError from 'rxjs'
    jest.spyOn(swalAlertService, 'loading').mockImplementation(() => {})
    jest.spyOn(swalAlertService, 'swalAlertClose').mockImplementation(() => {})
    jest.spyOn(swalAlertService, 'toast').mockImplementation(() => {})

    component.getProjects() // Call the getProjects method

    // Wait for asynchronous operations to finish
    tick()

    // Verify that the toast method was called with the correct parameters
    expect(swalAlertService.toast).toHaveBeenCalledWith(
      'Error',
      'Error message',
      'error',
      6000
    )

    // Verify that the swalAlertClose method was called
    expect(swalAlertService.swalAlertClose).toHaveBeenCalled()
  }))

  it('should open a dialog and handle its events', () => {
    // Spy on the open method of the MatDialog service
    const openSpy = jest.spyOn(matDialog, 'open')

    // Create a mock object with the necessary properties and methods
    const dialogRefMock: any = {
      afterClosed: jest.fn(() => of(undefined)),
      backdropClick: jest.fn(() => of(new MouseEvent('click'))),
      close: jest.fn()
    }

    // Make the open method return the mock object
    openSpy.mockReturnValue(dialogRefMock)

    component.openModal()

    // Expect that the open method of MatDialog was called
    expect(openSpy).toHaveBeenCalledWith(ModalsComponent, {
      width: '900px',
      minHeight: '50px',
      position: { top: '50px' },
      closeOnNavigation: true,
      hasBackdrop: true
    })

    // Expect that the afterClosed method of dialogRefMock was called
    expect(dialogRefMock.afterClosed).toHaveBeenCalled()

    // Expect that the backdropClick method of dialogRefMock was called
    expect(dialogRefMock.backdropClick).toHaveBeenCalled()
  })

  it('should apply filter', () => {
    // Simulate an event with a target and value property
    const event: any = {
      target: {
        value: 'project 1' // Filter value
      }
    }

    // Call the applyFilter method with the simulated event
    component.applyFilter(event)

    // Verify that the data source filter is correct
    expect(component.dataSource.filter).toBe('project 1')
  })
})
