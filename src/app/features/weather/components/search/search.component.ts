import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'wf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  _searchValue: string = '';
  @Output() searchValue = new EventEmitter<string>();

  onSearchChange() {
    this.searchValue.emit(this._searchValue);
  }
}
