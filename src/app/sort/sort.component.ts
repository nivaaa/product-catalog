import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: any) { 
    let target = (event.target as HTMLInputElement)
    this.sortChange.emit(target.value);
  }
}
