import { Observable } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UtilityService implements OnDestroy {

    getTodayTime() {
        let meridiem = 'AM';
        const observable = new Observable(subscriber => {
        setInterval(() => {
            let time, minString, secString;
            const date = new Date();
            let hours = date.getHours();
            const mins = date.getMinutes();
            const secs = date.getSeconds();
            if (hours > 12) {
            hours = hours - 12;
            meridiem = 'PM';
            }
            if (mins < 10) {
                minString = '0' + mins;
            } else {
                minString = mins;
            }
            if (secs < 10) {
                secString = '0' + secs;
            } else {
                secString = secs;
            }
            time = hours + ':' + minString + ':' + secString + ' ' + meridiem;

                subscriber.next(time);
            }, 1000);
            });
        return observable;
    }
      ngOnDestroy() {
      }
}
