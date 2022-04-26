import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface dynElement {
 Sr_No: string,
 Legacy_Parameter: string,
 Description:string,
 System:string,
 BPCS_Parameter:string
}
const ELEMENT_DATA: dynElement[] = [
  {
    Sr_No: "1",
    Legacy_Parameter: "xyz",
    Description: "xyz",
   System: "xyz",
   BPCS_Parameter: "xyz"
  },
  {
    Sr_No: '2',
    Legacy_Parameter: 'string',
    Description:'string',
    System:'string',
    BPCS_Parameter:'string'
   },
  {
    Sr_No: '3',
    Legacy_Parameter: 'string1',
    Description:'1',
    System:'string1',
    BPCS_Parameter:'string1'
     },
  {
    Sr_No: "4",
    Legacy_Parameter: "xyz",
    Description: "xyz",
    System: "xyz",
    BPCS_Parameter: "xyz"
  },
]
@Component({
  selector: 'app-table-sticky-header-example',
  templateUrl: './table-sticky-header-example.component.html',
  styleUrls: ['./table-sticky-header-example.component.scss']
})
export class TableStickyHeaderExampleComponent implements OnInit {
  displayedColumns: string[] = ['Sr_No', 'Legacy_Parameter', 'Description', 'System', 'BPCS_Parameter'];
  dataSource = [...ELEMENT_DATA]; // you can pass your data from backend her
  constructor() { }
  ngOnInit(): void {
    
  }

  @ViewChild(MatTable) table: MatTable<dynElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
 

}

