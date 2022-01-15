import { TaskDetailsModel } from './task-details.model';
import { UtilityService } from './../../@core/utils/utility.service';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService, NbTagComponent, NbTagListComponent, NbTagInputAddEvent, NbTagInputDirective } from '@nebular/theme';
const TREES = [ 'Prometheus', 'Methuselah', 'Gran Abuelo', 'Scofield Juniper', 'Panke Baobab', 'Jaya Sri Maha Bodhi' ];
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
  tagItems = [
    {id: 1, title: 'Number one'},
    {id: 2, title: 'Number two'},
    {id: 3, title: 'Number three'},
  ];
  // tags = [];
  tasks = [];
  comments = [];
  selectedTagItems = [];
  // tags: Set<string> = new Set([]);
  tags: Set<string> = new Set<string>();
  options: string[] = TREES;
  tasksDetails: TaskDetailsModel[];
  trees = [...TREES];
  progress: number = 0;
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
        if (this.progress <= 100) {
          this.progress = this.progress + Math.round(60 / 100);
        } else {
          clearInterval(this.timer);
        }
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

  // onTagRemove(tagToRemove: NbTagComponent): void {
    // this.tags = this.tags.filter(o =>  o.tag !== tagToRemove.text);
    // this.tags.delete(tagToRemove.text);
  // }

  // onTagAdd({ value, input }: NbTagInputAddEvent): void {
    // if (value) {
    //   this.tags['id'] = this.tags.length + 1;
    //   this.tags['tagName'] = value;
    // }
  //   console.log('tags');
  //   if ( value) {
  //    this.tags.add(value);
  //   }
  //   input.nativeElement.value = '';
  // }

  saveDetails() {
    this.startStopCounter();
  }
  // onTagRemove(tagToRemove: NbTagComponent): void {
  //   this.tags.delete(tagToRemove.text);
  //   this.options.push(tagToRemove.text);
  // }

  formatTime(percent) {
    const value = Math.floor((60 - percent) / 60) + ':' + (60 - percent) % 60;
    return value;
  }
  onTagAdd(value: string): void {
    if (value) {
      this.tags.add(value);
      this.options = this.options.filter(o => o !== value);
    }
    this.tagInput.nativeElement.value = '';
  }

  onTagRemove(tagToRemove: string): void {
    this.trees = this.trees.filter(t => t !== tagToRemove);
  }
}


