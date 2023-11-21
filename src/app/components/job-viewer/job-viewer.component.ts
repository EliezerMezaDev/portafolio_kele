import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-job-viewer',
  templateUrl: './job-viewer.component.html',
  styleUrls: ['./job-viewer.component.scss'],
})
export class JobViewerComponent implements OnInit {
  @Input() data: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
