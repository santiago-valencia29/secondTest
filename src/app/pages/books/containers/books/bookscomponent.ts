import { ModalsComponent } from '../../components/modals/modals.component'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { SwalAlertService } from 'src/app/shared/services/swal-alert.service'
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/utils/UnsubscribeOnDestroyAdapter'
import { Book } from '../../models/book.model'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'publicationDate',
    'pages',
    'isbn',
    'stock',
    'actions'
  ]

  dataSource: MatTableDataSource<Book>
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator
  @ViewChild(MatSort, { static: true }) sort: MatSort
  Books: Book[] = []
  @ViewChild('inputFilter') inputFilter: ElementRef
  books: Book[] = []

  constructor(
    private _swalAlertService: SwalAlertService,
    private _bookService: BookService,

    public dialog: MatDialog
  ) {
    super()
  }

  ngOnInit() {
    this.getBooks()
  }

  getBooks() {
    this._swalAlertService.loading('Cargando libros...')
    this._bookService.getAllBooks().subscribe(
      (books) => {
        this.books = books
        this.dataSource = new MatTableDataSource(this.books)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
        setTimeout(() => {
          this._swalAlertService.swalAlertClose()
        }, 1000)
      },
      (error) => {
        this._swalAlertService.toast('Error', error.message, 'error', 6000)
      }
    )
  }

  openModal(row:Book) {
    const dialogRef = this.dialog.open(ModalsComponent, {
      width: '500px',
      minHeight: '50px',
      position: { top: '20px' },
      closeOnNavigation: true,
      hasBackdrop: true,
      data:row
      // disableClose: false
    })
    this.subs.sink = dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
    })

    this.subs.sink = dialogRef.backdropClick().subscribe((result) => {
      dialogRef.close()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
}
