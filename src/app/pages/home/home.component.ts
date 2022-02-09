import { Subject } from 'rxjs';
import { TaskDetailsModel } from './../../@core/Models/task-details.model';
import { UtilityService } from './../../@core/utils/utility.service';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbTagComponent, NbTagInputAddEvent, NbTagInputDirective } from '@nebular/theme';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('addDetails') addDetailsTempl;
  @ViewChild(NbTagInputDirective, { read: ElementRef }) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('timerValue') timerValue: ElementRef<HTMLInputElement>;
  @ViewChild('minuteHand') minuteHand: ElementRef<HTMLInputElement>;
  @ViewChild('secondHand') secondHand: ElementRef<HTMLInputElement>;
  public todayTime: string;
  public counter: string;
  public isStarted: boolean = false;
  public counterMin = 25;
  public counterSec = 60;
  public counterTime;
  public timer;
  public defaults = {};
  public startDate: Date;
  public face = document.getElementById('lazy');
  public elapsed: Date;
  public pomodoroInterval: number = 1;
  private pomodoro$ = new Subject<boolean>();

  tasks: TaskDetailsModel[] = [];
  task: TaskDetailsModel = {
   taskName : 'Javascript Concepts',
   tagNames : ['Theory', 'Work'],
   comments : 'Reading from official doc',
   rating : 4,
  };
  comments = [];
  selectedTagItems = [];
  // tags: Set<string> = new Set([]);
  tags = ['Theory', 'Data Structure'];
  searchText: string;
  currentRate = 8;
  constructor(private utility: UtilityService,
    private dialogService: NbDialogService) { }

  ngOnInit(): void {
  //   this.counter = '25 : 00';
  //  this.utility.getTodayTime().subscribe((time: string) => {
  //   this.todayTime = time;
  //  });
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

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog,
       {
         context: 'this is some additional data passed to dialog',
          hasBackdrop: false,
    });
  }

  // save popup details
  save() {
    if (this.saveTagDetails()) {
      this.startStopCounter();
    }
  }

  saveTagDetails() {
    this.tasks.push(this.task);
    // console.log(this.task);
    // console.log(this.tasks);
    return true;
  }

  addTags(e) {
    // console.log(e);
    this.task.tagNames.push(e);
  }

  removeTags(e) {
    // console.log(e);
    this.task.tagNames = this.task.tagNames.filter(name => name !== e);
  }
  // start pomodoro on click start button
  startPomodoro() {
    this.isStarted = !this.isStarted;
    // add animation class to timer
    this.addAnimation();

    // start timer
    this.tick();

    // check if timer ends or not
    this.pomodoro$.subscribe((res) => {
      if (res) {
        this.removeAnimation();
      }
    });
  }

  // stop pomodoro on click stop button
  stopPomodoro() {
    // show popup
    if (this.stopPomodoroAlert()) {
      this.isStarted = !this.isStarted;
      cancelAnimationFrame(this.timer);
      this.removeAnimation();
      this.timerValue.nativeElement.innerText = '00:' + this.pomodoroInterval + ':00';
    }
  }

  // reset pomodoro
  resetPomodoro() {
    this.isStarted = !this.isStarted;
    cancelAnimationFrame(this.timer);
    this.removeAnimation();
    this.timerValue.nativeElement.innerText = '00:' + this.pomodoroInterval + ':00';
  }

  /**
   * show popup before ending pomodoro session
   */
  stopPomodoroAlert() {

    return false;
  }

  /**
   * starts timer
   */
  tick() {
    const one_second = 1000;
    const one_minute = one_second * 60;
    const one_hour = one_minute * 60;
    const one_day = one_hour * 24;
    const startDate = new Date();
    let count;
    // console.log('inside tick');
    const calculateTime = () => {
      count = count + 1;
      // console.log(count);
      const now = new Date();
      const elapsed = now.valueOf() - startDate.valueOf();
      const parts = [];
      const timer = 0;
      parts[0] = '' + Math.floor( elapsed / one_hour);
      parts[2] = '' + (59 - Math.floor( ( (elapsed % one_hour) % one_minute ) / one_second ));
      parts[1] = '' + ((this.pomodoroInterval - 1) - Math.floor( (elapsed % one_hour) / one_minute ));
      parts[0] = (parts[0].length === 1) ? '0' + parts[0] : parts[0];
      parts[1] = (parts[1].length === 1) ? '0' + parts[1] : parts[1];
      parts[2] = (parts[2].length === 1) ? '0' + parts[2] : parts[2];
      this.timerValue.nativeElement.innerText = parts.join(':');
      if (parts[1] === '00' && parts[2] === '00') {
        this.pomodoro$.next(true);
        // stop animation
        cancelAnimationFrame(this.timer);
        return false;
      }

      const requestAnimationFrame = (function() {
        return window.requestAnimationFrame       ||
               function( callback ) {
                 window.setTimeout(callback, 1000 / 60);
               };
      }());

      this.timer = requestAnimationFrame(calculateTime);
    };

    calculateTime();
  }

  addAnimation() {
    this.minuteHand.nativeElement.classList.remove('pause');
    this.secondHand.nativeElement.classList.remove('pause');
    this.minuteHand.nativeElement.classList.add('animation', 'play');
    this.secondHand.nativeElement.classList.add('animation', 'play');
  }

  // remove animation from tinmer
  removeAnimation() {
    this.minuteHand.nativeElement.classList.remove('animation', 'play');
    this.secondHand.nativeElement.classList.remove('animation', 'play');
  }

}


