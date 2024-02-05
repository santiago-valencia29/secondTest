import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SidebarComponent } from './sidebar.component';
import { ModalsComponent } from 'src/app/pages/ui-elements/components/modals/modals.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let matDialog: MatDialog;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [SidebarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open a dialog and handle its events', () => {
    // Spy on the open method of the MatDialog service
    const openSpy = jest.spyOn(matDialog, 'open');

    // Create a mock object with the necessary properties and methods
    const dialogRefMock: any = {
      afterClosed: jest.fn(() => of(undefined)),
      backdropClick: jest.fn(() => of(new MouseEvent('click'))),
      close: jest.fn()
    }

    // Make the open method return the mock object
    openSpy.mockReturnValue(dialogRefMock);

    component.openModal();

    // Expect that the open method of MatDialog was called
    expect(openSpy).toHaveBeenCalledWith(ModalsComponent, {
      width: '900px',
      minHeight: '50px',
      position: { top: '50px' },
      closeOnNavigation: true,
      hasBackdrop: true,
    });

    // Expect that the afterClosed method of dialogRefMock was called
    expect(dialogRefMock.afterClosed).toHaveBeenCalled();

    // Expect that the backdropClick method of dialogRefMock was called
    expect(dialogRefMock.backdropClick).toHaveBeenCalled();
  });
});
