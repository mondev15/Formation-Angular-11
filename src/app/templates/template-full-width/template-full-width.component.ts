import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  // pass data from parent to children
  @Input() public title!: string;
  constructor() {}
  ngOnchanges(): void {
    console.log(this.title);
  }
  ngOnInit(): void {}
}
