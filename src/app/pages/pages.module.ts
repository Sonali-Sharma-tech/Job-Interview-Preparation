import { TopicsComponent } from './topics/topics.component';
import { RecordsModule } from './records/records.module';
import { TopicsModule } from './topics/topics.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    TopicsComponent,
    RecordsComponent,
  ],
})
export class PagesModule {
}
