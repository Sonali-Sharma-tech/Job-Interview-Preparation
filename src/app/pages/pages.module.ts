import { FormsModule } from './forms/forms.module';
import { TopicsComponent } from './topics/topics.component';
import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule, NbDialogModule, NbTagComponent } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RecordsComponent } from './records/records.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    NbDialogModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    TopicsComponent,
    RecordsComponent,
  ],
  entryComponents: [NbTagComponent],
})
export class PagesModule {
}
