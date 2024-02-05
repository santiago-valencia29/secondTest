import { Component, OnInit } from '@angular/core'
import { routes } from '../routes/routes'
import { MatDialog } from '@angular/material/dialog'
import { ModalsComponent } from 'src/app/pages/books/components/modals/modals.component'
import { UnsubscribeOnDestroyAdapter } from '../utils/UnsubscribeOnDestroyAdapter'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public routes: typeof routes = routes

  constructor(public dialog: MatDialog) {
    super()
  }

  ngOnInit() {}

  openModal() {
    const dialogRef = this.dialog.open(ModalsComponent, {
      width: '900px',
      minHeight: '50px',
      position: { top: '50px' },
      closeOnNavigation: true,
      hasBackdrop: true
      // disableClose: false
    })
    this.subs.sink = dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result)
    })

    this.subs.sink = dialogRef.backdropClick().subscribe((result) => {
      dialogRef.close()
    })
  }
}
