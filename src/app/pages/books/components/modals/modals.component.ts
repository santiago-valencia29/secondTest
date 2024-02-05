import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/utils/UnsubscribeOnDestroyAdapter'
import { Book } from '../../models/book.model'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{

  constructor(
    public dialogRef: MatDialogRef<ModalsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Book
  ) {
    super()
  }

  ngOnInit() {
    console.log(this.data);
  }


  onClose(): void {
    this.dialogRef.close({ close: true })
  }
}
