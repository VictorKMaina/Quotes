import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
  pure: false
})
export class TimePassedPipe implements PipeTransform {

  transform(entryTime: Date) {
    let timePassed = (new Date().getTime()) - entryTime.getTime();
    return Math.round(timePassed/60000);
  }
}
