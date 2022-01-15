import { CustomTagComponent } from './tag-list/tag/custom-tag.component';
import { NgModule } from '@angular/core';
import { NbIconModule, NbCardModule } from '@nebular/theme';
import { CustomTagListComponent } from './tag-list/custom-tag-list.component';

@NgModule({
    imports: [
        NbIconModule,
        NbCardModule,
    ],
    exports: [
      CustomTagListComponent,
      CustomTagComponent,
    ],
    declarations: [
      CustomTagListComponent,
      CustomTagComponent,
     ],
    providers: [],
})
export class SharedModule {
}
