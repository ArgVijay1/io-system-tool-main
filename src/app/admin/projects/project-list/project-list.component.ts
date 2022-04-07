import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData, ProjectDataService } from './data.service';
import { SelectionModel } from '@angular/cdk/collections';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ProjectCreateComponent } from '../project-create/project-create.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['select', 'id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private readonly dataService: ProjectDataService,
    private dialog: MatDialog) { }
    animal:any;
    
    ngOnInit(): void {
  this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    this.selection = new SelectionModel<UserData>(true, []);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectCreateComponent, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
 this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //total no. of rows
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  //all rows
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
}
