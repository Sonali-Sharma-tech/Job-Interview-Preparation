import { CustomTagComponent } from './../../shared/tag-list/tag/custom-tag.component';
import { CustomTagListComponent } from './../../shared/tag-list/custom-tag-list.component';
import { SharedModule } from './../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from './../forms/forms.module';
import { NbCardModule,
   NbButtonModule, NbTagModule,
    NbInputModule, NbFormFieldModule, NbAutocompleteModule, NbIconModule, NbTagListComponent } from '@nebular/theme';
import { UtilityService } from './../../@core/utils/utility.service';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbButtonModule,
    NbTagModule,
    NbInputModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    SharedModule,
    NbIconModule,
    NgCircleProgressModule,
  ],
  declarations: [HomeComponent],
  providers: [UtilityService],
  entryComponents: [
   CustomTagListComponent,
   CustomTagComponent,
  ],
})
export class HomeModule { }
