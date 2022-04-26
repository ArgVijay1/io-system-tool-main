import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //userForm!:FormGroup;

  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  userForm = new FormGroup({
    //id:new FormControl(),
    Users:new FormControl,
    Phone_No:new FormControl(),
    Role:new FormControl(),
    Name: new FormControl(''),
    Email: new FormControl('')
});
  onNoClick(): void {
    console.log("onNoCLick"+this.userForm.value);
    this.dialogRef.close();
  }
  saveData(){
    console.log(this.userForm.value);
  }
}
