import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangepickerComponent } from './date-rangepicker/date-rangepicker.component';
import { DaterangeComponent } from './daterange/daterange.component';
import { DateRangeFormatPipe } from './date-rangepicker/date-range-format.pipe';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [DateRangepickerComponent, DaterangeComponent, DateRangeFormatPipe],
  exports: [DaterangeComponent]
})
export class AppCommonModule { }
