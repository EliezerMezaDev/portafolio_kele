import { Component, Input, OnInit } from '@angular/core';

//? CONTROLLERS
import { ModalController } from '@ionic/angular';

//? COMPONENTS
import { JobViewerComponent } from '../job-viewer/job-viewer.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  @Input() job: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async openJobViewer() {
    const modal = await this.modalController.create({
      component: JobViewerComponent,
      componentProps: { job: this.job },
      cssClass: 'modal viewJob',
    });

    await modal.present();
  }
}
