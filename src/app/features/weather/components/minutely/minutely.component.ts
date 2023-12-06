import { Component, Input } from '@angular/core';

@Component({
  selector: 'wf-minutely',
  templateUrl: './minutely.component.html',
  styleUrls: ['./minutely.component.scss']
})
export class MinutelyComponent {
  items: any[] = [];

  @Input('items') set getItems(items: any[]) {
    this.items = items;
  }
  
}
