import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component'
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, SharedModule, FlexLayoutModule, NgChartsModule],
  declarations: [DashboardContainerComponent]
})
export class Dashboard {}
