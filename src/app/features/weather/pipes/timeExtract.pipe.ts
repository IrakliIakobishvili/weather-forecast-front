import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeExtract'
})
export class TimeExtractPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).format('HH:mm');
  }
}
