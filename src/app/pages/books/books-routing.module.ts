import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { ModalsComponent } from './components/modals/modals.component'

const routes: Routes = [
  {
    path: 'modals',
    component: ModalsComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class booksRoutingModule {}
