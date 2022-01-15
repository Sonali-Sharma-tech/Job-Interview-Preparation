import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.scss'],
})
export class CustomTagComponent implements OnInit {
  @Input() text;
  @Output() tagRemove: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  // on click remove tag
  onTagRemove() {
   this.tagRemove.emit(this.text);
  }

}


