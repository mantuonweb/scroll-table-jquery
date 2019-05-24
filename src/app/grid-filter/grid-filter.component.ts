import { Component, OnInit, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
//https://www.ag-grid.com/javascript-grid-filter-text/
const noop = () => {
};
export const GRID_FILTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GridFilterComponent),
  multi: true
};

@Component({
  selector: 'app-grid-filter',
  templateUrl: './grid-filter.component.html',
  styleUrls: ['./grid-filter.component.scss'],
  providers: [GRID_FILTER_VALUE_ACCESSOR]
})
export class GridFilterComponent implements OnInit, ControlValueAccessor {
  filterValue;
  condition1  = 'contains';
  condition2 = 'contains';
  condition1Value;
  condition2Value;
  operator = 'OR';

  filterTypes = [{
    name: 'equals',
    displayName: 'Equals',
  }, {
    name: 'notEqual',
    displayName: 'Not Equals',
  }, {
    name: 'startsWith',
    displayName: 'Starts With',
  }, {
    name: 'endsWith',
    displayName: 'Ends With',
  }, {
    name: 'contains',
    displayName: 'Contains',
  }, {
    name: 'notContains',
    displayName: 'Not Contains',
  }];
  constructor() { }

  ngOnInit() {
  }
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
    return this.filterValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.filterValue) {
      this.filterValue = v;
      this.onChangeCallback(v);
    }
  }
  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.filterValue) {
      this.filterValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  getFilterModel() {
    let filterModel = {};
    if (this.condition1Value) {
      filterModel['condition1'] = {
        type: this.condition1,
        filter: this.condition1Value
      }
    }
    if (this.condition2Value) {
      filterModel['condition2'] = {
        type: this.condition2,
        filter: this.condition2Value
      }
      filterModel['operator']=this.operator;
    }
    return filterModel;
  }
  applyFilter(){
    this.value = this.getFilterModel();
  }
  cancelFilter(){
    this.value = null;
    this.resetOptions();
  }
  resetOptions(){
    this.condition1Value = '';
    this.condition2Value = '';
    this.operator = 'OR';
  }
  // <li><a href="#">HTML</a></li>
  //   <li><a href="#">CSS</a></li>
  //   <li><a href="#">JavaScript</a></li> -->
  //   <!-- {
  //   condition1:{
  //       type:'endsWith',
  //       filter:'thing'
  //   },
  //   condition2:{
  //       type:'startsWith',
  //       filter:'some'
  //   },
  //   // one of 'AND' / 'OR'
  //   operator:'AND'
}