import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() filterChange = new EventEmitter<string>();
  @Input() filterValue: any;

  onFilterChange(event:any) {
    let target = (event.target as HTMLInputElement)
    this.filterChange.emit(target.value);
  }
}
