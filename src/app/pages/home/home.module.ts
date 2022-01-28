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
// import { NgCircleProgressModule } from 'ng-circle-progress';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbTagModule,
    NbInputModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    SharedModule,
    NbIconModule,
    TagInputModule,
    NgbModule,
  ],
  declarations: [HomeComponent],
  providers: [UtilityService],
  entryComponents: [
   CustomTagListComponent,
   CustomTagComponent,
  ],
})
export class HomeModule { }
