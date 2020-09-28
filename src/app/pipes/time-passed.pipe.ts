import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
  pure: false
})
export class TimePassedPipe implements PipeTransform {

  transform(entryTime: Date) {
    let currentTime = new Date().getTime();
    let timePassed = currentTime - entryTime.getTime();
    return Math.round(timePassed/1000);
  }
}
