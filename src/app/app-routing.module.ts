import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { BooksComponent } from './pages/books/containers/books/bookscomponent'
import { DashboardContainerComponent } from './pages/dashboard/dashboard-container/dashboard-container.component'

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardContainerComponent
  },
  {
    path: 'books',
    pathMatch: 'full',
    component: BooksComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
