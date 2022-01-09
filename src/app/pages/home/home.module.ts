import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { UtilityService } from './../../@core/utils/utility.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbButtonModule,
  ],
  providers: [UtilityService],
})
export class HomeModule { }
