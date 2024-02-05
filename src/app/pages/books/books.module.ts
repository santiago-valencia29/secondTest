import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BooksComponent } from './containers/books/bookscomponent'
import { SharedModule } from 'src/app/shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { ModalsComponent } from './components/modals/modals.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { booksRoutingModule } from './books-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    booksRoutingModule,
    SharedModule
  ],
  exports: [
    BooksComponent,
    ModalsComponent,
  ],
  declarations: [BooksComponent, ModalsComponent]
})
export class BooksModule {}
