import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateRangePickerDates, DateRangePickerOptions} from '../date-rangepicker/date-rangepicker.component';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss']
})
export class DaterangeComponent implements OnInit {
  @Output()
  selected = new EventEmitter();
  @Output()
  calendarToggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  dateFrom: Date;
  @Input()
  dateTo: Date;

  private currentValue: DateRangePickerDates;
  value: Object;
  options: DateRangePickerOptions;

  constructor() {}

  ngOnInit() {
    this.options = {
      labels: ['Start', 'End'],
      menu: [
        { alias: 'td', text: 'Today', operation: '0d' },
        { alias: 'tm', text: 'This Month', operation: '0m' },
        { alias: 'lm', text: 'Last Month', operation: '-1m' },
        { alias: 'tw', text: 'This Week', operation: '0w' },
        { alias: 'lw', text: 'Last Week', operation: '-1w' },
        { alias: 'ty', text: 'This Year', operation: '0y' },
        { alias: 'ly', text: 'Last Year', operation: '-1y' }
      ],
      dateFormat: 'YYYY/MM/DD',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 0,
      outputType: 'object',
      locale: 'en-US',
      date: this.getCalendarStartDateRange()
    };
  }

  dateChanged(newValue): void {
    this.currentValue = newValue;
  }

  dateRangeSelected(): void {
    this.selected.emit(this.currentValue);
  }

  private getCalendarStartDateRange() {
    const today = new Date();

    this.currentValue = {
      from: this.dateFrom || today,
      to: this.dateTo || today
    };

    return this.currentValue;
  }

  pickerToggleEvent($event): void {
    this.calendarToggleEvent.emit($event);
  }
}
