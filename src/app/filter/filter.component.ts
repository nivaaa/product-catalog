import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  // @Output() categoryFilter = new EventEmitter<string>();
  // @Output() priceFilter = new EventEmitter<string>();

  @Output() filterChange = new EventEmitter<string>();


  // filterByCategory(event: any) {
  //   this.categoryFilter.emit(event.target.value);
  // }

  // filterByPrice(event: any) {
  //   this.priceFilter.emit(event.target.value);
  // }

  onFilterChange(event:any) {
    let target = (event.target as HTMLInputElement)
    this.filterChange.emit(target.value);
  }
}
