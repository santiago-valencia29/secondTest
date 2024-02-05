import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AngularMaterialModule } from 'src/app/app-material.module'
import {
  EmailComponent,
  NotificationsComponent,
  UserComponent
} from './components'
import { ShortNamePipe } from './pipes'
import { HeaderComponent } from './containers/header/header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  declarations: [
    HeaderComponent,
    NotificationsComponent,
    EmailComponent,
    UserComponent,
    ShortNamePipe
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
