import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { User } from '../user.model';

const ELEMENT_DATA:User[]=[
  {
    id:1,
    Name:'vinay',
    Users:'1',
    Email:'admin@email.com',
    Phone_No:'9090909909',
    Role:'admin'
  },
  {
    id:2,
    Name:'akash',
    Users:'2',
    Email:'customer@email.com',
    Phone_No:'43434344',
    Role:'custmoer'
  },
  {
    id:3,
    Name:'vijay',
    Users:'3',
    Email:'user@email.com',
    Phone_No:'9090909909',
    Role:'admin'
  }
]

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['Users', 'Email', 'Phone_No', 'Role',"action"];
  dataSource = [...ELEMENT_DATA]; // you can pass your data from backend her
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openEditDialog(): void { 
    
    //console.log("selected id "+row.datares1_id);
   
    const dialogRef = this.dialog.open(EditUserComponent, {
    //data: row
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The edit dialog was closed');
    //this.rows = result;
  });
  }
}