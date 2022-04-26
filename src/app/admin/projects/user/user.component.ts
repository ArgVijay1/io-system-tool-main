import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { CreateUserComponent } from './create-user/create-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  setTab(tabname: string) {
    console.log(tabname);
    this.router.navigateByUrl('/projects/switch-tab/'+tabname);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      
      data: { 
        //name: this.Users,
        //clientData: this.clientData 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The  create dialog was closed');
      //this.rows = result;
      console.log("data after create dialog"+result);
    });
  }
}
