import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-filters',
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.scss'],
})
export class JobFiltersComponent {
  // @Input() options?: any[] = [];
  optionSelected: any = '';

  // @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  public open: boolean = false;

  options: any[] = ['tag 1', 'tag 2', 'tag 3', 'tag 5'];

  constructor() {}

  public toggleDropdown() {
    this.open = !this.open;
  }

  public selectOption(_option: any) {
    this.optionSelected = _option;
    this.open = false;
  }
}
