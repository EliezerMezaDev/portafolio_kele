import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './job/job.component';
import { ViewJobComponent } from './view-job/view-job.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    JobComponent,
    ViewJobComponent,
  ],
  exports: [HeaderComponent, FooterComponent, JobComponent, ViewJobComponent],
})
export class ComponentsModule {}
