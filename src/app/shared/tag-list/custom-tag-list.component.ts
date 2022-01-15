import { Component, EventEmitter, OnInit, Output, ElementRef, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'ngx-custom-tag-list',
  templateUrl: './custom-tag-list.component.html',
  styleUrls: ['./custom-tag-list.component.scss'],
})
export class CustomTagListComponent implements OnInit {
// @Output() removedTag: EventEmitter<string> = new EventEmitter<string>();
// @ContentChild('ref') private ref: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
