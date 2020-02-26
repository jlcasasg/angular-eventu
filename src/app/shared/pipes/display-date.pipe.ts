import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {
  len = 'long';

  transform(value: any, ...args: any[]): any {
    let startDate = value;
    let endDate = args[0];
    this.len = args[1] || this.len;

    if (moment(endDate).diff(startDate, 'days') > 0) {
      if (this.len === 'long') {
        return `${moment(startDate).format('DD/MMM/YYYY HH:mm')} ~ ${moment(endDate).format('DD/MMM-YYYY HH:mm')}`
      }
      else {
        return `${moment(startDate).format('DD-MMM')}        ${moment(endDate).format('DD-MMM')}`
      }
    }
    else {
      if (this.len === 'long') {
        return `${moment(startDate).format('DD/MMM/YYYY HH:mm')} - ${moment(endDate).format('HH:mm')}`
      }
      else {
        return `${moment(startDate).format('DD-MMM')}`
      }
    }
  }

}
