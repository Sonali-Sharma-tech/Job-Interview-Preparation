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
  public todayTime: string;
  public counter: string;
  public isStarted: boolean = false;
  public counterMin = 25;
  public counterSec = 60;
  public counterTime;
  public timer;

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
}


