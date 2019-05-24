import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.scss']
})
export class GridFilterComponent implements OnInit {
  filterTypes =['contains', 'notContains', 'equals', 'notEqual', 'startsWith', 'endsWith'];
  constructor() { }

  ngOnInit() {
  }

}