import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SharedModule } from './shared/shared.module'
import { BooksModule } from './pages/books/books.module'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from 'src/environments/environment'
import { HttpClientModule } from '@angular/common/http'
import { Dashboard } from './pages/dashboard/dashboard.module'
import { NgChartsModule } from 'ng2-charts'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    Dashboard,
    BooksModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerImmediately'
    }),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
