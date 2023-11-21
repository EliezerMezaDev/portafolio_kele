import { Component, OnInit } from '@angular/core';

//? CONTROLLERS
import { ModalController } from '@ionic/angular';

//? COMPONENTS
import { ViewJobComponent } from 'src/app/components/view-job/view-job.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  source = [
    {
      name: 'job 1',
      client: 'Eliezer Meza',
      description:
        'nsectetur gravida. Nunc condimentum posuere turpis sed fringilla. Quisque eleifend massa eget risus laoreet convallis. Mauris vitae purus',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: ['#123', '#456', '#789'],
      source: {
        main: {
          view: {
            front: 'jobs/job1/job1_500x500_1.jpg',
            back: 'jobs/job1/job1_500x500_2.jpg',
          },
          label: 'job 1 label',
        },
        others: [
          'jobs/job1/job1_1200x650_1.jpg',
          'jobs/job1/job1_1200x650_2.jpg',
          'jobs/job1/job1.jpg',
        ],
      },
    },
    {
      name: 'job 2',
      client: 'Eliezer Meza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium turpis id accumsan gravida. Pellentesque porttitor molestie dui in euismod. Aenean iaculis in odio nec eleifend. Quisque porttitor libero nisl, ac fermentum ex pretium ut. Aenean ac efficitur odio. Duis mal',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: ['#123', '#456', '#789'],
      source: {
        main: {
          view: {
            front: 'jobs/job2/job2_500x500_1.jpg',
            back: 'jobs/job2/job2_500x500_2.jpg',
          },
          label: 'job 1 label',
        },
        others: [
          'jobs/job2/job2_1200x650_2.jpg',
          'jobs/job2/job2_1200x650_2.jpg',
          'jobs/job2/job2.jpg',
        ],
      },
    },
    {
      name: 'job 3',
      client: 'Eliezer Meza',
      description: ' odio at est egestas vehicula.',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: ['#123', '#456', '#789'],
      source: {
        main: {
          view: {
            front: 'jobs/job1/job1_500x500_2.jpg',
            back: 'jobs/job1/job1_500x500_1.jpg',
          },
          label: 'job 1 label',
        },
        others: [
          'jobs/job1/job1_1200x650_1.jpg',
          'jobs/job1/job1_1200x650_2.jpg',
          'jobs/job1/job1.jpg',
        ],
      },
    },
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // this.openModalViewJob(0);
  }

  async openModalViewJob(_index: any) {
    const modal = await this.modalController.create({
      component: ViewJobComponent,
      componentProps: { data: this.source[_index] },
      cssClass: 'modal viewJob',
    });

    await modal.present();
  }
}
