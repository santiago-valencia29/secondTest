import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: any
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>()

  constructor() {}

  ngOnInit() {
  }
}
