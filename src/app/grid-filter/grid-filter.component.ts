import { Component, OnInit } from '@angular/core';
//https://www.ag-grid.com/javascript-grid-filter-text/
@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.scss']
})
export class GridFilterComponent implements OnInit {
  filterTypes = [{
    name:'contains',
    displayName:'Contains',
  },{
    name:'notContains',
    displayName:'notContains',
  },{
    name:'equals',
    displayName:'equals',
  },{
    name:'notEqual',
    displayName:'notEqual',
  },{
    name:'startsWith',
    displayName:'startsWith',
  },{
    name:'endsWith',
    displayName:'endsWith',
  }];
  constructor() { }

  ngOnInit() {
  }

}