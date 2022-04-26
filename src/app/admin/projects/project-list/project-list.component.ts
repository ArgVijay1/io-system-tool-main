import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService} from './data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { ProjectCreateComponent } from '../project-create/project-create.component';
import {ProjectEditComponent} from '../project-edit/project-edit.component';
import {ProjectDeleteComponent} from '../project-delete/project-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector:  'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  rows:Array<UserData>=[];
  @ViewChild('id') id:ElementRef;
  name:string;

  


  displayedColumns = ['select', 'id', 'name', 'progress', 'color',"action"];
  dataSource: MatTableDataSource<UserData>;
  selection: SelectionModel<UserData>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private dialog:MatDialog,private readonly dataService: DataService) {}

  ngOnInit() {
    this.rows = [
      {
        id: '1',
        name: 'Apartment1',
        color:'red',
        progress: '48%'
      },
      {
        id: '2',
        name: 'Apartment2',
        color:'green',
        progress: '45%'
      },
      {
        id: '3',
        name: 'Apartment3',
        color:'yellow',
        progress: '53%'
      },
      {
        id: '4',
        name: 'Apartment4',
        color:'blue',
        progress: '56%'
      }];
    this.dataSource = new MatTableDataSource(this.dataService.create100Users());
    this.selection = new SelectionModel<UserData>(true, []);
    console.log("dataresult "+this.rows);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectCreateComponent, {
      
      data: { 
        name: this.name,
        //clientData: this.clientData 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The  create dialog was closed');
      this.rows = result;
      console.log("data after create dialog"+result);
    });
  }
  /*openEdit(index:any){
    console.log("selected id "+this.dataSource[index].id)
  }*/
  openEditDialog(row:any): void { 
    
      console.log("selected id "+row.datares1_id);
     
      const dialogRef = this.dialog.open(ProjectEditComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit dialog was closed');
      //this.rows = result;
    });
  }

  openDeleteDialog(row:any): void {
    const dialogRef = this.dialog.open(ProjectDeleteComponent, {
      data: { 
        id: this.id, clientData: this.rows 
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The delete was closed');
      this.rows = result;
    });
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
  
  openDelDialog() {
    const dialogRef = this.dialog.open(ProjectDeleteComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    //const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
       // snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        console.log("delete dialog dismissed");
       // snack.dismiss();
        /*this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });*/
      }
    });
  }

}
