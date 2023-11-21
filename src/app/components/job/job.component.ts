import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  @Input() data: any;
  @Input() index: any;

  @Output() eventManager: any = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  jobClicked() {
    this.eventManager.emit(this.index);
  }
}
