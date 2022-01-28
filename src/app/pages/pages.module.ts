import { NgCircleProgressModule } from 'ng-circle-progress';
import { CustomTagListComponent } from './../shared/tag-list/custom-tag-list.component';
import { CustomTagComponent } from './../shared/tag-list/tag/custom-tag.component';
import { FormsModule } from './forms/forms.module';
import { TopicsComponent } from './topics/topics.component';
import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule, NbDialogModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records/records.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NgCircleProgressModule.forRoot({}),
  ],
  declarations: [
    PagesComponent,
    TopicsComponent,
    RecordsComponent,
  ],
  entryComponents: [
    CustomTagListComponent,
    CustomTagComponent,
  ],
})
export class PagesModule {
}
