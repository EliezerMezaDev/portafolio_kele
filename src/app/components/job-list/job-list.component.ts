import { Component, OnInit, inject } from '@angular/core';

//? SERVICES
import { JobsService } from 'src/app/services/jobs.service';

//? CONTROLLERS
import { ModalController } from '@ionic/angular';

//? COMPONENTS
import { JobViewerComponent } from '../job-viewer/job-viewer.component';

//? INTERFACES
import { job } from 'src/app/interfaces';

//? OTHERS
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobList: job[] = [];

  ngOnInit() {}

  private jobService = inject(JobsService);
  private jobSubjectSubscription: Subscription;

  constructor() {
    this.jobSubjectSubscription = this.jobService
      .getAllJob()
      .subscribe((resp: job[]) => {
        this.jobList = resp;
      });
  }

  ngDestroy() {
    this.jobSubjectSubscription.unsubscribe();
  }
}
