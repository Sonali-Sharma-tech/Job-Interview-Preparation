import { UtilityService } from './../../@core/utils/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todayTime: string;
  public counter: string;
  public isStarted: boolean = false;
  public counterMin = 25;
  public counterSec = 60;
  public counterTime;
  public timer;
  constructor(private utility: UtilityService) { }

  ngOnInit(): void {
    this.counter = '25 : 00';
   this.utility.getTodayTime().subscribe((time: string) => {
    this.todayTime = time;
   });
  }

  // start and stop the counter
  startStopCounter() {
    this.isStarted = !this.isStarted;
    if (this.isStarted) {
      this.timer = setInterval(() => {
       this.counter = this.setCounter();
       if (this.counter === '0 : 00') {
         this.isStarted = false;
         clearInterval(this.timer);
       }
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  }
  // set counter value each second
  setCounter(): string {
    this.counterSec = this.counterSec - 1;
    return this.getCounter();
  }

  // get Counter
  getCounter() {
    if (this.counterSec === -1) {
      this.counterSec = 59;
    }
    if (this.counterSec === 59) {
      this.counterMin = this.counterMin - 1;
    }
    if (this.counterSec < 10) {
      this.counterTime = this.counterMin + ':' + '0' + this.counterSec;
    } else {
      this.counterTime = this.counterMin + ':' + this.counterSec;
    }
    return this.counterTime;
  }

  // reset Counter
  resetCounter() {
    this.counterMin = 25;
    this.counterSec = 0;
   this.counter = this.getCounter();
  }
}


