import { NbCardModule } from '@nebular/theme';
import { UtilityService } from './../../@core/utils/utility.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [UtilityService],
})
export class HomeModule { }
