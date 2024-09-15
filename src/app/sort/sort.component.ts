import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  // @Output() sort = new EventEmitter<string>();

  // sortProducts(event: any) {
  //   this.sort.emit(event.target.value);
  // }

  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: any) { //value: string
    // let value : string as 'asc' | 'desc'= event.target.value ;
    let target = (event.target as HTMLInputElement)
    this.sortChange.emit(target.value);
  }
}
