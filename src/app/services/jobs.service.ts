import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { job } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobList: job[] = [
    {
      name: 'job 1',
      client: 'Eliezer Meza',
      description: 'nsectetur gravida. Nunc condimentum',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '',
      tags: ['fotografia', 'diseño'],
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
      name: 'job 3',
      client: 'Eliezer Meza',
      description: ' odio at est egestas vehicula.',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: [],
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
    {
      name: 'job 3',
      client: 'Eliezer Meza',
      description: ' odio at est egestas vehicula.',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: [],
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
    {
      name: 'job 2',
      client: 'Eliezer Meza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium turpis id accumsan gravida. Pellentesque porttitor molestie dui in euismod. Aenean iaculis in odio nec eleifend. Quisque porttitor libero nisl, ac fermentum ex pretium ut. Aenean ac efficitur odio. Duis mal',
      date: 'agosto, 2023',
      rol: 'Diseñadora',
      link: '#',
      tags: ['tags'],
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
      tags: [],
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
  private jobSubject = new BehaviorSubject<job[]>(this.jobList);

  private jobFilterSubject = new BehaviorSubject<string>('all');

  constructor() {
    this.setupFiltering();
  }

  public getAllJob(): Observable<job[]> {
    return this.jobSubject.asObservable();
  }

  public setupFiltering() {
    // this.jobFilterSubject.subscribe((status: any) => {
    //   const filteredJob =
    //     status === 'all'
    //       ? this.jobList
    //       : this.jobList.filter((job: any) => job.status === status);
    //   this.jobSubject.next(filteredJob);
    // });
  }
}
