import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { JobComponent } from './job/job.component';
import { JobFiltersComponent } from './job-filters/job-filters.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobViewerComponent } from './job-viewer/job-viewer.component';
import { ArrowComponent } from './job-filters/components/arrow.components';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    JobComponent,
    JobFiltersComponent,
    JobListComponent,
    JobViewerComponent,
    ArrowComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    JobComponent,
    JobFiltersComponent,
    JobListComponent,
    JobViewerComponent,
    ArrowComponent
  ],
})
export class ComponentsModule {}
