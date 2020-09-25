import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(entryTime: Date) {
    let currentTime = new Date();
    let pastTime = currentTime.getSeconds() - entryTime.getSeconds();
    return pastTime + " seconds";
  }

}
